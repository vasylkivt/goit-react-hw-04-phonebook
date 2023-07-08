import PropTypes from 'prop-types';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Button, Contact, List, Text, TextWrap } from './ContactList.style';

export default function ContactList({ contacts, onRemoveContact }) {
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <Contact key={id}>
          <TextWrap>
            <Text>{name}</Text>
            <Text>{number}</Text>
          </TextWrap>
          <Button onClick={() => onRemoveContact(id)} type="button">
            <RiDeleteBin6Line />
          </Button>
        </Contact>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
