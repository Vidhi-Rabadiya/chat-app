import { Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import contactListItem from '../contactListItem/contactListItem.style';
const ChatListItem = ({ chat }) => {

    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate('Chat', { id: chat.id, name: chat.user.name })} style={contactListItem.mainContainer}>
            <Image style={contactListItem.imageStyle} source={{ uri: chat.user.image }} />
            <Text numberOfLines={1} style={contactListItem.nameStyle}>{chat.user.name}</Text>
        </Pressable>
    );
};

export default ChatListItem;

