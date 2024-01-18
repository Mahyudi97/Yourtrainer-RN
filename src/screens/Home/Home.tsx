import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PublicStackNavigatorParamsList} from '../../navigation/Public/PublicStackType';

const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<PublicStackNavigatorParamsList>>();

  return (
    <View style={homeStyles.body}>
      <Text>YourTrainer</Text>
      <Text>Find your personal trainer with us</Text>
      <Pressable
        style={getStarted.button}
        onPress={() => {
          navigation.navigate('Details');
        }}>
        <Text style={getStarted.text}>Get Started</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const homeStyles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'linear-gradient(180deg, #2F01B2 0%, #000F2E 100%)',

    // backgroundColor: '#2F01B2, #000F2E',
  },
});

const getStarted = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: '#FFFFFF',
    width: 330,
    height: 49,
    borderRadius: 30,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '600',
    letterSpacing: 0.25,
    color: '#000000',
  },
});
