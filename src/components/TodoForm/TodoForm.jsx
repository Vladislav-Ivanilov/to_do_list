import { Formik, Form, Field, ErrorMessage } from 'formik';
import { customAlphabet } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/toDo/slice';
import { object, string } from 'yup';

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
    };

    dispatch(addTodo(newTodo));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ values, handleChange, setFieldValue }) => (
          <Form>
            <div>
              <label htmlFor="title">Title:</label>
              <Field
                type="text"
                name="title"
                id="title"
                onChange={handleChange}
                value={values.title || ''}
              />
              <ErrorMessage name="title" component="div" />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <Field
                type="text"
                name="description"
                id="description"
                onChange={handleChange}
                value={values.description || ''}
              />
              <ErrorMessage name="description" component="div" />
            </div>
            <button type="submit">Create</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
