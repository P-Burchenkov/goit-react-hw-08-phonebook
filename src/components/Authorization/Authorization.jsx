import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { authUser } from 'redux/Authorization/operations';

export default function AuthForm() {
  const dispatch = useDispatch();

  const initialValue = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = data => {
    dispatch(authUser(data));
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
        </label>
        <label>
          Email
          <Field type="email" name="email" />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Authorize</button>
      </Form>
    </Formik>
  );
}
