import 'react-native-gesture-handler';

import React from 'react';
import type {Node} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    Image,
    TouchableOpacity,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

// const Stack = createNativeStackNavigator();

// const BaseText = ({ children }) => {
//     return (
//         <Text style={styles.baseText}>
//             {children}
//         </Text>
//     )
// }

// const HomeScreen = ({ navigation }) => {
//     return (
//         <Button
//             title="Go to Jane's profile"
//             onPress={() =>
//                 navigation.navigate('Profile', { name: 'Jane' })
//             }
//         />
//     );
// };
// const ProfileScreen = ({ navigation, route }) => {
//     return (
//         <BaseText>
//             <Text>This is {route.params.name}'s profile</Text>
//         </BaseText>
//     );
// };

// function LogoTitle() {
//     return (
//         <TouchableOpacity
//         onPress={() => alert('This is a button!')}
//         >
//             <Image
//             style={{ width: 25, height: 25 }}
//             source={require('./assets/menu.png')}
//             />
//         </TouchableOpacity>
//     );
// }




function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
}

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}


const Drawer = createDrawerNavigator();


const App: () => Node = () => {
    return (
        
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
        

        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen
        //         name="Home"
        //         component={HomeScreen}
        //         options={{
        //             headerTitle: props => <LogoTitle {...props} />,
        //             headerRight: () => (
        //                 <Button
        //                 onPress={() => alert('This is a button!')}
        //                 title="Info"
        //                 color="grey"
        //                 />
        //             ),
        //         }}
        //         />
        //         <Stack.Screen name="Profile" component={ProfileScreen} />
        //     </Stack.Navigator>
        // </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    baseText: {
        color: 'black'
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
