import { Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import chatListItem from './chatListItem.style';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ChatListItem = ({ chat }) => {

    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate('Chat', { id: chat.id, name: chat.user.name })} style={chatListItem.mainContainer}>
            <Image style={chatListItem.imageStyle} source={{ uri: chat.user.image }} />
            <View style={chatListItem.contentContainer}>
                <View style={chatListItem.headerContainer}>
                    <Text numberOfLines={1} style={chatListItem.nameStyle}>{chat.user.name}</Text>
                    <Text style={chatListItem.createdAtStyle}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text>
                </View>
                <Text numberOfLines={2} style={chatListItem.messageStyle}>{chat.lastMessage.text}</Text>
            </View>
        </Pressable>
    );
};

export default ChatListItem;

