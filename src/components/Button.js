/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {hp} from '../common/utils';

export default function Button({
  children,
  background = '#FA5805',
  onPress,
  style,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.children}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  children: {
    textAlign: 'center',
    color: '#fff',
    fontSize: hp(17),
    fontWeight: '600',
  },
  container: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#FA5805',
  },
});
