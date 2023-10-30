import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ContactList, ContactsItem } from 'components/ContactsList/ContactsList.styled';
import { fetchContacts } from 'redux/contacts/operations';
import Contact from 'components/Contact/Contact';
import { useSelectors } from 'hooks/UseSelector';
import Notification from 'components/Notafication/Notafication';

const ContactsList = () => {
  const dispatch = useDispatch();

  const { contacts, filter, isLoggedIn } = useSelectors();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter ? filter.toLowerCase() : '';

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ContactList>
      {isLoggedIn && visibleContacts.length > 0 ? (
        visibleContacts.map(({ id, name, number }) => (
          <ContactsItem key={id}>
            <Contact id={id} name={name} number={number} />
          </ContactsItem>
        ))
      ) : (
        <Notification />
      )}
    </ContactList>
  );
};

export default ContactsList;
