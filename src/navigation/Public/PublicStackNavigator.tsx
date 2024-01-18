import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home/Home';
import Detail from '../../screens/Detail';

const PublicStack = createNativeStackNavigator();

const PublicStackNavigator = () => {
  return (
    <PublicStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <PublicStack.Screen name="Home" component={Home} />
      <PublicStack.Screen name="Details" component={Detail} />
    </PublicStack.Navigator>
  );
};

export default PublicStackNavigator;

const styles = StyleSheet.create({});
