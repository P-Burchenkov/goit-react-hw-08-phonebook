import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';

import ValidateWarning from 'components/ValidateWarning';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts/operations';

import css from './ContactForm.module.css';

export default function ContactForm({ closeModal }) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const navigate = useNavigate();

  const initialValue = {
    name: '',
    number: '',
  };

  const schema = object({
    name: string().required(),
    number: number().required().positive().integer(),
  });

  const handleSubmit = (data, { resetForm }) => {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].number === data.number) {
        toast.error(
          `Number: ${data.number} is already in your contacts with name:  "${contacts[i].name}"!`
        );

        return;
      }
      if (contacts[i].name === data.name) {
        toast.error(
          `"${data.name}" is already in your contacts with number:  ${contacts[i].number}!`
        );

        return;
      }
    }
    toast.success(
      `Number ${data.number} was successfully added to you phonebook with name: "${data.name}"!`
    );
    dispatch(addContact(data));
    navigate('/contacts');
    closeModal();

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field
            placeholder="Name"
            className={css.field}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
          />
          <ErrorMessage
            name="name"
            component={ValidateWarning}
            text="Name may contain only letters, apostrophe, dash and spaces."
          />
        </label>
        <label className={css.label}>
          Number
          <Field
            placeholder="Phonenumber"
            className={css.field}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage
            name="number"
            text="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            component={ValidateWarning}
          />
        </label>
        <Button type="submit" variant="contained">
          Add contact
        </Button>
      </Form>
    </Formik>
  );
}
