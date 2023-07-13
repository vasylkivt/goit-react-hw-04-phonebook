import { useEffect, useState } from 'react';

import {
  Notification,
  Section,
  Contacts,
  Container,
  ContactForm,
} from 'components';

import { Toaster, toast } from 'react-hot-toast';
import { toastOptions } from 'styles';

const LOCAL_STORAGE_KEY = 'contacts';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContact] = useState(
    JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = e => setFilter(e.currentTarget.value);

  const removeContact = contactId => {
    const removedContact = contacts.find(({ id }) => id === contactId);

    toast.success(`${removedContact.name} deleted from your contacts list.`);
    setContact(contacts.filter(({ id }) => id !== contactId));
  };

  const addContact = (contact, actions) => {
    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      toast.error(`${contact.name}  is already in contacts. `);
      return;
    }
    if (contacts.find(({ number }) => number === contact.number)) {
      toast.error(`Number "${contact.number}" is already in contacts. `);
      return;
    }

    setContact(prevContacts => {
      return [contact, ...prevContacts];
    });

    toast.success(`${contact.name} added to your contact list.`);
    actions.resetForm();
  };

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterContacts = getFilterContacts();
  const isPhonebookEmpty = contacts.length === 0;

  return (
    <Section title={'phonebook'}>
      <Container>
        <ContactForm onSubmit={addContact}>
          {isPhonebookEmpty && (
            <Notification $textAlign="right" $marginBottom="30px">
              Add first contact!
            </Notification>
          )}
        </ContactForm>
        <div>
          <Toaster toastOptions={toastOptions} />
        </div>

        {!isPhonebookEmpty ? (
          <Contacts
            title={'contact list'}
            contacts={getFilterContacts()}
            value={filter}
            onChange={changeFilter}
            onRemoveContact={removeContact}
          >
            {!isPhonebookEmpty && filterContacts.length === 0 && (
              <Notification>nothing found</Notification>
            )}
          </Contacts>
        ) : (
          <Notification $textAlign="center">
            Your phonebook is empty.
          </Notification>
        )}
      </Container>
    </Section>
  );
};