import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PublicStackNavigatorParamsList} from '../navigation/Public/PublicStackType';

const Detail = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<PublicStackNavigatorParamsList>>();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Page</Text>
      <View style={{marginTop: 10}}>
        <Button
          title="Go back Home"
          onPress={() => {
            // navigation.navigate('Home');
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
