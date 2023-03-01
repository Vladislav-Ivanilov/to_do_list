import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeStatus } from '../../redux/toDo/slice';
import { Overlay, ModalBlock } from './Modal.styled';

const modalRoot = document.getElementById('modal');

export const Modal = ({ closeModal, selectIdTodo }) => {
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos.items);
  const todo = todos.find(todo => todo.id === selectIdTodo);

  const handelChange = id => {
    dispatch(changeStatus(id));
  };

  return createPortal(
    <Overlay>
      <ModalBlock>
        <h2>{todo.title}</h2>
        <div>
          <h3>Description:</h3>
          <p>{todo.description}</p>
          <input
            type="checkbox"
            id={todo.id}
            name={todo.title}
            checked={todo.completed}
            onChange={() => handelChange(todo.id)}
          />
          <button type="button" onClick={closeModal}>
            close
          </button>
        </div>
      </ModalBlock>
    </Overlay>,
    modalRoot
  );
};
