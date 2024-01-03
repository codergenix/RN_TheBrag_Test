import React from 'react';
import { StatusBar, LogBox, Platform, View, } from 'react-native';
import Navigation from './navigation';
import { COLOR } from './Utils/Theme';
import FlashMessage from "react-native-flash-message";
import { SafeAreaProvider } from 'react-native-safe-area-context';
//--- store
import { Provider, } from 'react-redux';
import store from './Store';

LogBox.ignoreAllLogs();
export default function App() {
  return (
    <>
      <Provider store={store}>
        <SafeAreaProvider >
          <View style={{ backgroundColor: COLOR.darkgreen, height: Platform.OS === 'ios' && 50 }}>
            <StatusBar backgroundColor={COLOR.darkgreen} translucent barStyle="light-content" />
          </View>
          <Navigation />
          <FlashMessage position="bottom" duration={500} />
        </SafeAreaProvider>
      </Provider>
    </>
  );
};
