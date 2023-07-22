import { nanoid } from 'nanoid';
import {
  ContactWriper,
  ContactItem,
  ContactInfo,  
  ContactButton,
  ButtonWrapper,
  ModalWrapper,
  ModalButton,
  ModalTitle,
  ModalText,
} from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {  toast } from 'react-toastify';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const submit = id => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <ModalWrapper className="custom-ui">
            <ModalTitle>Are you sure?</ModalTitle>
            <ModalText>You want to delete this contact?</ModalText>
            <ButtonWrapper>
              <ModalButton onClick={onClose}>No</ModalButton>
              <ModalButton
                onClick={() => {
                  dispatch(deleteContact(id));
                  toast.success('Success! The contact has been deleted', {
                    position: 'top-left',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                  });
                  onClose();
                }}
              >
                Yes!
              </ModalButton>
            </ButtonWrapper>
          </ModalWrapper>
        );
      },
    });
  };

  const handleDeleteContact = id => {
    submit(id);
  };

  const normalizeFilter = filter.toLocaleLowerCase();

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(normalizeFilter);
  });

  return (
    <ContactWriper>
      {filterContacts.map(contact => {
        return (
          <ContactItem key={nanoid()}>
            <ContactInfo>
              {contact.name}: {contact.number}
            </ContactInfo>
            <ContactButton
              type="button"
              onClick={() => {
                handleDeleteContact(contact.id);
              }}
            >
              Delete
            </ContactButton>
          </ContactItem>
        );
      })}
    </ContactWriper>
  );
};

export default ContactList;
