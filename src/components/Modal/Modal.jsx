import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeStatus } from '../../redux/toDo/slice';
import {
  Overlay,
  ModalBlock,
  ModalDescription,
  Button,
  Completed,
  CompletedBlock,
  BlockInfo,
} from './Modal.styled';

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
        <ModalDescription>
          <BlockInfo>
            <h3>Description:</h3>
            <p>{todo.description}</p>
          </BlockInfo>
          <CompletedBlock>
            <p>Status:</p>
            <Completed
              type="checkbox"
              id={todo.id}
              name={todo.title}
              checked={todo.completed}
              onChange={() => handelChange(todo.id)}
            />
          </CompletedBlock>

          <Button type="button" onClick={closeModal}>
            Close
          </Button>
        </ModalDescription>
      </ModalBlock>
    </Overlay>,
    modalRoot
  );
};
