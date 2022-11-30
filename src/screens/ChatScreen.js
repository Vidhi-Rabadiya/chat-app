import { FlatList, ImageBackground, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import bg from '../../assets/images/BG.png';
import messages from '../../assets/data/messages.json';
import Message from '../components/message/Message';
import InputBox from '../components/inputBox/InputBox';
import { useEffect } from 'react';

const ChatScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: route.params.name });
    }, [route.params.name]);

    return (
        <ImageBackground source={bg} style={styles.backgroundStyle}>
            <FlatList
                style={styles.listStyle}
                data={messages}
                renderItem={({ item }) => <Message message={item} />}
                inverted
            />
            <InputBox />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
    },
    listStyle: {

    },
});

export default ChatScreen;

