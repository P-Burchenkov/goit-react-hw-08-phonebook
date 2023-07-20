import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Authorization/operations';

export default function LogInForm() {
  const dispatch = useDispatch();

  const initialValue = {
    email: '',
    password: '',
  };

  const handleSubmit = data => {
    dispatch(logIn(data));
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      <Form>
        <label>
          Email
          <Field type="email" name="email" />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
}
