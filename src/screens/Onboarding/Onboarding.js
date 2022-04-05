/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ImageBackground, Text, View, TouchableOpacity} from 'react-native';
import Button from '../../components/Button';
import {OnboardingStyles as styles} from './styles';

const Onboarding = ({navigation}) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../../../assets/onboard-bg.png')}
      style={styles.root}>
      <View style={{padding: 40}}>
        <Text style={styles.header}>Find a Perfect Job Match.</Text>

        <Text style={styles.desc}>
          One place with the best jobs companies tech. Apply to all of them with
          a single profile and get in touch with hiring managers directly.
        </Text>

        <View style={styles.bottomView}>
          <Button onPress={() => navigation.navigate('Home')}>
            Get Started
          </Button>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Onboarding;
