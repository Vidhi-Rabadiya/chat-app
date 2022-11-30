import { FlatList } from 'react-native';
import chats from '../../assets/data/chats.json';
import ContactListItem from '../components/contactListItem/ContactListItem';

const ContactsScreen = () => {
    return (
        <FlatList data={chats} renderItem={({ item }) => <ContactListItem chat={item} />} />
    );
};

export default ContactsScreen;

