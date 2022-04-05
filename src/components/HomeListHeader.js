/* eslint-disable prettier/prettier */
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CompanyCard from './CompanyCard';
import axios from 'axios';
import {hp, wp} from '../common/utils';

const HomeListHeader = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getHeader();
  }, []);

  const getHeader = async () => {
    try {
      const res = await axios.get(
        'https://remotive.io/api/remote-jobs?customer-support-legal&limit=5',
      );

      setData(res.data.jobs);
    } catch (e) {
      console.log(e.response.data);
    }
  };

  return (
    <View style={{padding: 20}}>
      <Text style={styles.jobFinder}>
        Hi! Robert, {'\n'}Find your Dream Job
      </Text>

      <View style={styles.header}>
        <View style={styles.container}>
          <TextInput style={styles.textInput} placeholder="Search for jobs" />

          <Ionicons name="search" size={22} color="black" style={styles.icon} />
        </View>

        <TouchableOpacity style={styles.optionBox} activeOpacity={0.8}>
          <Ionicons name="options" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.popCompany}>Popular Company</Text>

      <ScrollView
        snapToAlignment={'center'}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {data.map((items, index) => (
          <CompanyCard
            key={index}
            title={items?.title}
            image={items?.company_logo_url}
            place={items?.candidate_required_location}
            company={items?.company_name}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  jobFinder: {
    fontSize: hp(36),
    color: 'black',
    fontWeight: '600',
  },
  header: {
    flexDirection: 'row',
    marginVertical: 30,
    justifyContent: 'space-between',
  },
  optionBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    width: '17%',
    borderRadius: 12,
  },
  popCompany: {
    color: '#333',
    fontWeight: '600',
    marginBottom: 10,
  },
  container: {
    position: 'relative',
    width: '77%',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: hp(20),
    paddingLeft: wp(45),
    fontSize: hp(20),
  },
  icon: {
    position: 'absolute',
    left: 15,
  },
});

export default HomeListHeader;
