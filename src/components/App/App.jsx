import LocalStorage from '../../helpers/localStorage';

import ContactForm from 'components/ContactForm/ContactForm';
import Contacts from 'components/Contacts/Contacts';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';

import { Component } from 'react';
import { NotificationContactList, NotificationForm } from './App.style';
import { Toaster, toast } from 'react-hot-toast';

const toastOptions = {
  // Define default options

  style: {
    background: '#cfd4c4',
    color: '#003049',
  },

  // Default options for specific types
  success: {
    style: {
      boxShadow: '0px 0px 5px 0px #2A9D8F',
    },
    iconTheme: {
      primary: '#2A9D8F',
    },
  },
  error: {
    style: {
      boxShadow: '0px 0px 5px 0px #fb6107',
    },
    iconTheme: {
      primary: '#fb6107',
    },
  },
};

export default class App extends Component {
  LOCAL_STORAGE_KEY = 'contacts';

  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localStorageData = LocalStorage.load(this.LOCAL_STORAGE_KEY);
    const localStorageDataLength = localStorageData?.length;
    if (localStorageData !== null && localStorageDataLength > 0) {
      this.setState({ contacts: localStorageData });
    } else {
      this.setState({ contacts: [] });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      LocalStorage.save(this.LOCAL_STORAGE_KEY, contacts);
    }
  }

  changeFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  removeContact = contactId => {
    this.setState(({ contacts }) => {
      const removedContact = contacts.find(({ id }) => id === contactId);
      toast.success(`${removedContact.name} deleted from your contacts list.`);
      return { contacts: contacts.filter(({ id }) => id !== contactId) };
    });
  };

  addContact = (contact, actions) => {
    this.setState(prevState => {
      const isExist = prevState.contacts.find(
        ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
      );

      if (isExist) {
        toast.error(`${contact.name} is already in contacts.`);
        return;
      }
      toast.success(`${contact.name} added to your contact list.`);

      actions.resetForm();
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  getFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const filterContacts = this.getFilterContacts();
    const isPhonebookEmpty = contacts.length === 0;

    return (
      <>
        <Section title={'phonebook'}>
          <ContactForm onSubmit={this.addContact}>
            {isPhonebookEmpty && (
              <NotificationForm message="Add first contact!" />
            )}
          </ContactForm>
          <div>
            <Toaster toastOptions={toastOptions} />
          </div>
          {!isPhonebookEmpty ? (
            <Contacts
              title={'contact list'}
              contacts={filterContacts}
              value={filter}
              onChange={this.changeFilter}
              onRemoveContact={this.removeContact}
            >
              {!isPhonebookEmpty && filterContacts.length === 0 && (
                <Notification message="nothing found" />
              )}
            </Contacts>
          ) : (
            <NotificationContactList message="Your phonebook is empty." />
          )}
        </Section>
      </>
    );
  }
}
