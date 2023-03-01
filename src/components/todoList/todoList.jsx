import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';

export const TodoList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const todos = useSelector(state => state.todos.items);

  const toggleModal = event => {
    if (event.target) {
      setIsModalVisible(prevState => !isModalVisible);
    }
  };

  const [checkedState, setCheckedState] = useState(
    new Array(todos.length).fill(false)
  );

  return (
    <ul>
      {todos.map(({ id, title, description }, index) => {
        return (
          <li key={id} onClick={toggleModal}>
            <p>{index + 1}</p>
            <p>{title}</p>
            <p>{description}</p>
            <input type="checkbox" id={id} name={title} value={title} />
          </li>
        );
      })}
      {isModalVisible && (
        <Modal closeModal={toggleModal} completed={checkedState} />
      )}
    </ul>
  );
};
