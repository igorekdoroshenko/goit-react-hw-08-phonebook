import ContactForm  from 'components/ContactForm/ContactForm';
import { PhoneBookWrapper } from 'components/ContactForm/ContactForm.styled';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <PhoneBookWrapper>
      <div>
        <ContactForm />
      </div>
      <div>
        <h2>Contacts</h2>

        <Filter />
        <ContactList />
      </div>
    </PhoneBookWrapper>
  );
};

export default Contacts;