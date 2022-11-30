import { StyleSheet } from "react-native";

const chatListItem = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        margin: 8,
        height: 60,
    },
    contentContainer: {
        flex: 1,
        marginLeft: 8,
    },
    headerContainer: {
        flexDirection: 'row',
        marginBottom: 4
    },
    imageStyle: {
        width: 60,
        height: 60,
        borderRadius: 32,
    },
    nameStyle: {
        flex: 1,
        fontWeight: 'bold',
    },
    createdAtStyle: {
        color: 'grey',
    },
    messageStyle: {
        color: 'grey',
    },
});

export default chatListItem;