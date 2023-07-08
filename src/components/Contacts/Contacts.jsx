import PropTypes from 'prop-types';

import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Title, Wrap } from './Contacts.style';

export default function Contacts({
  contacts,
  value,
  title,
  children,
  onRemoveContact,
  onChange,
}) {
  return (
    <Wrap>
      <Title>
        <span>{title}</span>
      </Title>
      <Filter onChange={onChange} value={value} />
      <ContactList onRemoveContact={onRemoveContact} contacts={contacts} />
      {children}
    </Wrap>
  );
}

Contacts.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  value: PropTypes.string.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
