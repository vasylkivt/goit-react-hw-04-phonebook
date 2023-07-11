import PropTypes from 'prop-types';

import { Filter, ContactList, ContactListIcon } from 'components';
import { Title, Wrap } from './Contacts.style';

export function Contacts({
  contacts,
  value,
  title,
  children,
  onRemoveContact,
  onChange,
}) {
  return (
    <Wrap>
      <ContactListIcon />
      <Title>{title}</Title>
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
