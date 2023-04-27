import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, FormForRegister, Input, Title } from './RegisterForm.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, action) => {
    dispatch(register(value));
    action.resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <FormForRegister>
        <Title>Register please</Title>
        <Input name="name" type="text" placeholder="Username" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <Button type="submit">Register</Button>
      </FormForRegister>
    </Formik>
  );
};
