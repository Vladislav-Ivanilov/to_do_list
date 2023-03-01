import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { Overlay, ModalBlock } from './Modal.styled';

const modalRoot = document.getElementById('modal');

export const Modal = ({ closeModal, completed }) => {
  const todos = useSelector(state => state.todos.items);

  return createPortal(
    <Overlay>
      <ModalBlock>
        <h2>{todos.title}</h2>
        <div>
          <h3>Description:</h3>
          <p>{todos.description}</p>
          <input
            type="checkbox"
            id={todos.id}
            name={todos.title}
            value={todos.title}
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
