import { Layout } from 'components/Layout';
import { GlobalStyle } from '../../components/GlobalStyle';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
// import { Title, TitleSection } from '../../components/App.styled';
import { ContactList } from '../../components/ContactList/ContactList';

export default function Contacts() {
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Layout>
  );
}
