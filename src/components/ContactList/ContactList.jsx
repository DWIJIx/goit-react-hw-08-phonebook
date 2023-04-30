import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
// import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import {
  List,
  ContactItem,
  DelButton,
  ContactValue,
} from './ContactList.styled';

// const getVisibleContacts = (contacts, filter) => {
//   const normalizedContacts = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedContacts)
//   );
// };

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  // const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  // const visibleContacts = getVisibleContacts(contacts, filter);
  return (
    <section>
      <List>
        {visibleContacts.map(contact => {
          return (
            <li key={contact.id}>
              <ContactItem>
                <ContactValue>
                  {contact.name}: {contact.number}
                </ContactValue>

                <DelButton onClick={() => dispatch(deleteContact(contact.id))}>
                  Delete
                </DelButton>
              </ContactItem>
            </li>
          );
        })}
      </List>
    </section>
  );
};
