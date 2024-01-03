import React from 'react';
import { View as Div, Platform, StatusBar, } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { COLOR } from '../Utils/Theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//-------
import Splacescreen from '../Screen/Splacescreen';
import Giftlist from '../Screen/Giftlist';
//---
const Navigation = (props) => {
    const Stack = createNativeStackNavigator();
    
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
        <NavigationContainer theme={ThemeNavigation}>
            <Stack.Navigator
                initialRouteName="Splacescreen"
                screenOptions={({ route, navigation }) => ({
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
                {/*==========  screen  ==========*/}
                <Stack.Group>
                    <Stack.Screen
                        name="Splacescreen"
                        component={Splacescreen}
                        options={{ header: () => null, gestureEnabled: false }}
                    />
                    <Stack.Screen
                        name="Giftlist"
                        component={Giftlist}
                        options={{ header: () => null, gestureEnabled: false }}
                    />
                </Stack.Group>
                {/* ======================  other screen ====*/}

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation
