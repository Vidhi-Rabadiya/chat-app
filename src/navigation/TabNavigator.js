import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatsScreen from '../screens/ChatsScreen';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import Settings from '../screens/Settings';


const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName="Chats"
            screenOptions={{
                tabBarStyle: { backgroundColor: 'whitesmoke' },
                headerStyle: { backgroundColor: 'whitesmoke' }
            }}>
            <Tab.Screen name="Chats" component={ChatsScreen} options={({ navigation }) => ({
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="chat" size={size} color={color} />
                ),
                headerRight: ({ color, size }) => (
                    <Entypo onPress={() => navigation.navigate('Contacts')} name="new-message" size={18} color={'royalblue'} />
                ),
            })} />
            <Tab.Screen name="Settings" component={Settings} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="settings" size={size} color={color} />
                ),
            }} />
        </Tab.Navigator>

    );
};

export default TabNavigator;

