/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {hp} from '../../common/utils';

export const OnboardingStyles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  header: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '700',
  },
  desc: {
    color: '#ccc',
    lineHeight: 25,
    fontSize: 15,
    fontWeight: '500',
    marginVertical: 30,
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  skipText: {
    color: 'white',
    fontSize: hp(20),
  },
});
