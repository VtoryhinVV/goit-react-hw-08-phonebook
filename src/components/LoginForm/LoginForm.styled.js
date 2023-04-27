import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormForLogin = styled(Form)`
  width: 300px;
  padding: 20px;

  border: 1px solid black;
  margin: 10% auto 0;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin-top: 0;
  text-align: center;
`;

export const Input = styled(Field)`
  display: block;
  margin-top: 5px;
`;

export const Button = styled.button`
  margin-top: 20px;
`;
