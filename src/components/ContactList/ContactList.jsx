import PropTypes from 'prop-types';

import {
  Button,
  Contact,
  DeleteIcon,
  List,
  Text,
  TextWrap,
} from './ContactList.style';

export function ContactList({ contacts, onRemoveContact, children }) {
  return (
    <>
      <List>
        {contacts.map(({ name, number, id }) => (
          <Contact key={id}>
            <TextWrap>
              <Text>{name}</Text>
              <Text>{number}</Text>
            </TextWrap>
            <Button onClick={() => onRemoveContact(id)} type="button">
              <DeleteIcon />
            </Button>
          </Contact>
        ))}
      </List>
      {children}
    </>
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
