import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button, FormForLogin, Input, Title } from './LoginForm.styled';

const initialValues = { email: '', password: '' };

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, action) => {
    dispatch(logIn(value));
    action.resetForm();
  };

  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <FormForLogin>
          <Title>Login please</Title>
          <Input name="email" type="email" placeholder="Email" />
          <Input name="password" type="password" placeholder="Password" />
          <Button type="submit">Login</Button>
        </FormForLogin>
      </Formik>
    </>
  );
};
