import { View, Text, StyleSheet } from 'react-native';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const Message = ({ message }) => {

    const isMyMessage = () => {
        return message.user.id === 'u1';
    };
    return (
        <View style={[styles.containerStyle, {
            backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
            alignSelf: isMyMessage() ? 'flex-end' : 'flex-start'
        }]}>
            <Text>{message.text}</Text>
            <Text style={styles.createdAtStyle}>{dayjs(message.createdAt).fromNow(true)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        margin: 4,
        padding: 8,
        borderRadius: 8,
        maxWidth: '80%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    createdAtStyle: {
        color: 'gray',
        alignSelf: 'flex-end'
    },
});

export default Message;

