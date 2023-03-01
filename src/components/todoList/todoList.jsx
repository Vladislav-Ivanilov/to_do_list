import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { changeStatus } from '../../redux/toDo/slice';
import { Modal } from '../Modal/Modal';
import {
  Container,
  Tables,
  Table,
  List,
  Item,
  Title,
  Completed,
} from './todoList.styled';

export const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.items);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectIdTodo, setSelectIdTodo] = useState(null);

  const toggleModal = event => {
    if (event.target.tagName !== 'INPUT') {
      setIsModalVisible(() => !isModalVisible);
      setSelectIdTodo(event.currentTarget.id);
    }
  };

  const handelChange = id => {
    dispatch(changeStatus(id));
  };

  return (
    <Container>
      <Tables>
        <Table>ID</Table>
        <Table>TITLE</Table>
        <Table>DESCRIPTION</Table>
        <Table>STATUS</Table>
      </Tables>
      <List>
        {todos.map(({ id, title, description, completed }, index) => {
          return (
            <Item key={id} id={id} onClick={toggleModal}>
              <Title>{index + 1}</Title>
              <Title>{title}</Title>
              <Title>{description}</Title>
              <Completed
                type="checkbox"
                id={id}
                name={title}
                checked={completed}
                onChange={() => handelChange(id)}
              />
            </Item>
          );
        })}
        {isModalVisible && (
          <Modal closeModal={toggleModal} selectIdTodo={selectIdTodo} />
        )}
      </List>
    </Container>
  );
};
