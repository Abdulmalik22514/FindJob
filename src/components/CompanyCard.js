/* eslint-disable prettier/prettier */
import Entypo from 'react-native-vector-icons/Entypo';
import {Image, Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {hp, wp} from '../common/utils';

const JobType = ['Fulltime', 'Remote', 'Anywhere'];

const CompanyCard = ({image, title, company, place}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.imageStyle}
        />

        <Text style={styles.amount}>$50K - $60K</Text>
      </View>

      <Text style={styles.title}>{title}</Text>
      <View style={styles.heading}>
        <Text style={styles.companyName}>{company}</Text>

        <Entypo name="dot-single" size={18} color="#fff" />

        <Text style={styles.companyName}>{place}</Text>
      </View>

      <View style={styles.cardConatiner}>
        {JobType.map((item, index) => (
          <View style={styles.cardCont} key={index}>
            <Text style={styles.item}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#000',
    marginRight: wp(20),
    width: wp(250),
    borderRadius: 15,
  },
  item: {
    color: '#fff',
    fontSize: hp(10),
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageStyle: {
    height: hp(50),
    width: wp(50),
    resizeMode: 'contain',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  amount: {
    color: '#fff',
    fontWeight: '600',
  },
  title: {
    color: '#fff',
    fontSize: hp(15),
    fontWeight: '600',
    marginTop: hp(10),
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(5),
  },
  companyName: {
    color: '#ccc',
    fontSize: hp(10),
    fontWeight: '600',
  },
  cardConatiner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardCont: {
    padding: 5,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 4,
    flex: 0.3,
  },
});

export default CompanyCard;
