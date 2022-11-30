import { StyleSheet } from "react-native";

const contactListItem = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        margin: 8,
        height: 60,
        alignItems: 'center',
    },
    imageStyle: {
        width: 60,
        height: 60,
        borderRadius: 32,
    },
    nameStyle: {
        flex: 1,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});

export default contactListItem;