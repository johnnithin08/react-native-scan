/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment, FunctionComponent} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {flexChild} from './styles/common';

export const App: FunctionComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <SafeAreaProvider style={backgroundStyle}>
        <StatusBar barStyle="dark-content" />
        <Fragment>
          {Platform.select({
            ios: <View />,
            android: (
              <KeyboardAvoidingView behavior="padding" style={flexChild}>
                <View />
              </KeyboardAvoidingView>
            ),
          })}
        </Fragment>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
