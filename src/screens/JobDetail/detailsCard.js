/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {hp} from '../../common/utils';

export const Details = [{title: 'Description'}, {title: 'Company'}];

const DetailsCard = ({title, isActive, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.descBox, isActive && styles.active]}>
      <Text style={[styles.title, isActive && styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  descBox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(65),
    width: '50%',
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: '#FA5805',
  },
  title: {
    color: 'black',
    fontSize: 17,
    fontWeight: '600',
  },
  text: {
    color: 'white',
  },
});

export default DetailsCard;
