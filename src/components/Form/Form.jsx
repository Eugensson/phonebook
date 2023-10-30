import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';

import { addContact } from 'redux/contacts/operations';

import { ContactForm, FormLabel, FormBtn } from 'components/Form/Form.styled';

const Form = ({ onClose }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const onInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      number,
    };    
    dispatch(addContact(contact));
    e.target.reset();
    onClose();
  };

  return (
      <ContactForm onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <TextField
            onChange={onInputChange}
            autoComplete="off"
            required
            type="text"
            name="name"
            label="Leandro Kaplan"
            variant="filled"
            InputLabelProps={{
              style: { color: '#000' },
            }}
            fullWidth
          />
        </FormLabel>
        <FormLabel>
          Number
          <TextField
            onChange={onInputChange}
            autoComplete="off"
            InputLabelProps={{
              style: {
                color: '#000',
              },
            }}
            fullWidth
            required
            type="text"
            name="number"
            label="+38-000-000-00-00"
            variant="filled"
          />
        </FormLabel>
        <FormBtn type="submit">Add Contact</FormBtn>
      </ContactForm>
  );
};

export default Form;
