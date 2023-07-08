import React from 'react';

import {
  ButtonSubmit,
  Form,
  FormWrap,
  Input,
  InputName,
} from './ContactForm.style';

//?-------------------------------
//? contact form

import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

export default function ContactForm({ onSubmit, children }) {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
    <FormWrap>
      {children}
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          onSubmit({ ...values, id: nanoid() }, actions);
        }}
      >
        <Form>
          <InputName htmlFor={nameInputId}>
            Name{' '}
            <Input
              placeholder="Enter contact name"
              id={nameInputId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </InputName>

          <InputName htmlFor={numberInputId}>
            Number
            <Input
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
    </FormWrap>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
