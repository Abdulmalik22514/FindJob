/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {hp} from '../../common/utils';

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },

  companyName: {
    color: '#ccc',
    fontSize: 10,
    fontWeight: '600',
  },
  cardView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 10,
    width: 250,
  },
  itemCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    color: '#ccc',
    fontSize: 10,
    fontWeight: '600',
  },
  cardContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  imageStyle: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    borderRadius: 5,
    overflow: 'hidden',
    marginRight: 10,
  },
});
