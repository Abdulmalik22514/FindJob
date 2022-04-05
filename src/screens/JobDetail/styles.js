/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {hp, wp} from '../../common/utils';

export const DetailsStyles = StyleSheet.create({
  root: {
    flex: 1,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    backgroundColor: '#fff',
    paddingVertical: 30,
  },
  jobDetails: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  optionBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
    borderRadius: 12,
    borderColor: '#E3E3E3',
    borderWidth: 2,
    height: hp(65),
  },
  bottomCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxView: {
    borderWidth: 1,
    borderColor: '#000',
  },
  itemTitle: {
    color: '#000',
    fontSize: 10,
    textAlign: 'center',
  },
  applyText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
  jobDesc: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    borderColor: '#E3E3E3',
    borderWidth: 1,
    height: hp(65),
    flexDirection: 'row',
    marginHorizontal: wp(20),
    marginTop: hp(30),
  },
  applyBox: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: hp(65),
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  img: {
    height: hp(70),
    width: wp(70),
    resizeMode: 'contain',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.23)',
    marginRight: wp(10),
  },
  title: {
    width: '80%',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    marginTop: hp(15),
  },
  pay: {
    fontWeight: '600',
    marginVertical: hp(5),
  },
  box: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(200),
  },
  box2: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 4,
    flex: 0.3,
  },
  btn: {
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.3)',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  box3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
