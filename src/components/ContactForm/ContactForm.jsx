import { getContacts } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contacts/operations';
import { object, string } from 'yup';
import { Formik } from 'formik';
import { FormField, Form, FormLabel } from './ContactForm.styled';

let userSchema = object({
  name: string().required(),
  number: string().required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContacts);

  const handleSubmit = (values, actions) => {
    const nameInContacts = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (nameInContacts) {
      alert(`${values.name} is already in contacts`);
      actions.resetForm();
      return;
    }
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <FormLabel htmlFor="name">
          Name
          <FormField type="text" name="name" required />
        </FormLabel>
        <FormLabel htmlFor="number">
          Number
          <FormField type="tel" name="number" required />
        </FormLabel>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
