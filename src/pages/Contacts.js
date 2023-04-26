import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import { Container, GlobalStyle, Title } from 'components/GlobalStyle';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter />
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactList />
        <GlobalStyle />
      </Container>
    </>
  );
}
