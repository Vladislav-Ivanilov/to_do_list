import { Formik, Form } from 'formik';
import { customAlphabet } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/toDo/slice';
import { object, string } from 'yup';

import {
  Container,
  BlockForm,
  BlockInput,
  Label,
  Input,
  Error,
  Button,
} from './TodoForm.styled';

const nanoid = customAlphabet('1234567890', 3);

const schema = object().shape({
  title: string()
    .min(2, 'Min 2 ')
    .max(70, 'Min 2 ')
    .required(' This field is empty'),
  description: string().min(4).required(' This field is empty'),
});

const initialValues = {
  id: '',
  title: '',
  description: '',
  completed: false,
};

export const TodoForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { title, description } = values;

    const newTodo = {
      id: 'id' + nanoid(),
      title: title,
      description: description,
      completed: false,
    };

    dispatch(addTodo(newTodo));
    resetForm();
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ values, handleChange, setFieldValue }) => (
          <Form>
            <BlockForm>
              <BlockInput>
                <Label htmlFor="title">Title:</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  onChange={handleChange}
                  value={values.title || ''}
                  placeholder="Title"
                  autoComplete="off"
                />
                <Error name="title" component="div" />
              </BlockInput>
              <BlockInput>
                <Label htmlFor="description">Description:</Label>
                <Input
                  type="text"
                  name="description"
                  id="description"
                  onChange={handleChange}
                  value={values.description || ''}
                  placeholder="Description"
                  autoComplete="off"
                />
                <Error name="description" component="div" />
              </BlockInput>

              <Button type="submit">Create</Button>
            </BlockForm>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
