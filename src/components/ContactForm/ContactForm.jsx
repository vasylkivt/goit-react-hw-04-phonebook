import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import {
  ButtonSubmit,
  Form,
  Input,
  InputName,
  PersonIcon,
  TelephoneIcon,
} from './ContactForm.style';

export const ContactForm = ({ onSubmit, children }) => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const inputNameRef = useRef();

  return (
    <>
      {children}
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          inputNameRef.current.focus();

          onSubmit({ ...values, id: nanoid() }, actions);
        }}
      >
        <Form>
          <InputName htmlFor={nameInputId}>
            <PersonIcon />

            {
              <Input
                innerRef={el => {
                  inputNameRef.current = el;
                }}
                autoComplete="off"
                placeholder="Enter contact name"
                id={nameInputId}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            }
          </InputName>

          <InputName htmlFor={numberInputId}>
            <TelephoneIcon />
            <Input
              autoComplete="off"
              placeholder="Enter phone number"
              id={numberInputId}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </InputName>

          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        </Form>
      </Formik>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
