import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PublicStackNavigator from './Public/PublicStackNavigator';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <PublicStackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
