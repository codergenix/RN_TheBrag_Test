import React from 'react';
import { View as Div, Platform, StatusBar, } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { COLOR } from '../Utils/Theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//-------
import Splacescreen from '../Screen/SplashScreen';
import Giftlist from '../Screen/Giftlist';
//---
// Navigation component using React Navigation
const Navigation = (props) => {
    // Create a native stack navigator instance
    const Stack = createNativeStackNavigator();
    // Define the navigation theme
    const ThemeNavigation = {
        dark: true,
        colors: {
            primary: COLOR.light1,
            background: COLOR.Black1,
            card: COLOR.light1,
            text: COLOR.White1,
            border: COLOR.light1,
            notification: COLOR.light1,
        }
    }

    return (
        // Navigation container with the defined theme
        <NavigationContainer theme={ThemeNavigation}>
            {/* Stack navigator configuration */}
            <Stack.Navigator
                initialRouteName="Splacescreen"
                screenOptions={({ route, navigation }) => ({
                    // Common header styles for all screens
                    headerTintColor: COLOR.White1,
                    headerStyle: { backgroundColor: COLOR.White1 },
                    headerTitleAlign: 'left1',
                    headerTitleStyle: { fontWeight: '500', fontSize: 19, },
                    animation: 'none',
                    headerBackTitleVisible: false,
                    headerStatusBarHeight: Platform.OS == 'ios' ? 25 : StatusBar.currentHeight,
                    animationEnabled: false,
                })}
            >
                {/* Stack Group for screens */}
                <Stack.Group>
                    {/* Screen configuration for Splacescreen */}
                    <Stack.Screen
                        name="Splacescreen"
                        component={Splacescreen}
                        options={{ header: () => null, gestureEnabled: false }}
                    />
                    {/* Screen configuration for Giftlist  */}
                    <Stack.Screen
                        name="Giftlist"
                        component={Giftlist}
                        options={{ header: () => null, gestureEnabled: false }}
                    />
                </Stack.Group>
                {/* Additional screens can be added here  */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
// Export the Navigation component as the default export
export default Navigation
