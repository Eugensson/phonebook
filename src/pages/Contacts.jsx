import {useState} from 'react';

import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Form from 'components/Form/Form';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import Modal from 'components/Modal/Modal';

import { ContactsWrapper, Group, Btn } from 'components/pages.styled';

const Contacts = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <ContactsWrapper>
      <Group>
        <Btn type='button' onClick={toggleModal}><PersonAddAlt1Icon sx={{ fontSize: 60 }}/></Btn>
        <Filter />
      </Group>
      <ContactsList />            
      {showModal && <Modal onClose={toggleModal}><Form onClose={toggleModal} textBtn="Add"/></Modal>}
    </ContactsWrapper>
  );
};

export default Contacts;
