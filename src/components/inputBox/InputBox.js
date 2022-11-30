import { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';


const InputBox = () => {
    const [newMessage, setNewMessage] = useState('');

    const onSend = () => {
        console.warn('message: ' + newMessage);
        setNewMessage('');
    };

    return (
        <SafeAreaView edges={['bottom']} style={styles.containerStyle}>
            <TextInput style={styles.inputStyle} value={newMessage} onChangeText={setNewMessage} placeholder={'Type your message here...'} />
            <MaterialIcons onPress={onSend} style={styles.sendStyle} name="send" size={20} color="white" />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        padding: 4,
    },
    inputStyle: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 8,
        borderRadius: 50,
        borderColor: 'lightgray',
        borderWidth: StyleSheet.hairlineWidth,
    },
    sendStyle: {
        backgroundColor: 'royalblue',
        padding: 7,
        borderRadius: 20,
        overflow: 'hidden',
        marginLeft: 4,
    },
});

export default InputBox;

