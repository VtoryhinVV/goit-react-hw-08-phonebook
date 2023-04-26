import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ContactItem, Contact } from './ContactList.styled';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(contact.id));

  return (
    <ContactItem>
      <Contact>{contact.name}</Contact>
      <Contact>{contact.number}</Contact>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </ContactItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
