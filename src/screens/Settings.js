import { StyleSheet, Text, View } from 'react-native';

const Settings = () => {
    return <View style={styles.containerStyle}><Text style={styles.labelStyle}>Settings</Text></View>
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelStyle: {
        fontSize: 20,
    }
});
export default Settings;