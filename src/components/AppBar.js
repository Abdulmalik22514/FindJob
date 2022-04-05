/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {hp} from '../common/utils';
// const {StatusBarManager} = NativeModules;

// const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export default function AppBar({title = '', isBack = false}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Ionicons
        onPress={
          isBack
            ? () => {
                navigation.goBack();
              }
            : undefined
        }
        name={isBack ? 'chevron-back-outline' : 'menu-outline'}
        size={32}
        color="black"
      />

      <Text style={styles.title}>{title}</Text>

      {!isBack ? (
        <Ionicons name="person-outline" size={24} color="black" />
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp(80),
    flexDirection: 'row',
    paddingHorizontal: 20,
    // marginTop: STATUSBAR_HEIGHT,
    position: 'relative',
  },
  title: {
    fontWeight: '600',
    position: 'absolute',
    textAlign: 'center',
    left: '50%',
  },
});
