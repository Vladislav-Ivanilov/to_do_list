import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { changeStatus } from '../../redux/toDo/slice';
import { Modal } from '../Modal/Modal';

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
    <ul>
      {todos.map(({ id, title, description, completed }, index) => {
        return (
          <li key={id} id={id} onClick={toggleModal}>
            <p>{index + 1}</p>
            <p>{title}</p>
            <p>{description}</p>
            <input
              type="checkbox"
              id={id}
              name={title}
              checked={completed}
              onChange={() => handelChange(id)}
            />
          </li>
        );
      })}
      {isModalVisible && (
        <Modal closeModal={toggleModal} selectIdTodo={selectIdTodo} />
      )}
    </ul>
  );
};
