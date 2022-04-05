/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import AppBar from '../../components/AppBar';
import {DetailsStyles as styles} from './styles';
import DetailsCard, {Details} from './detailsCard';

const JobDetail = ({route}) => {
  const item = route.params;
  const [active, setActive] = useState('Description');

  return (
    <View style={styles.container}>
      <AppBar isBack title={item.company_name} />

      <ScrollView style={styles.root}>
        <View style={{alignItems: 'center'}}>
          <Image source={{uri: item.company_logo_url}} style={styles.img} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.pay}>$50K - $60K</Text>

          <View style={styles.box}>
            {['Fulltime', 'Remote', 'Anywhere'].map((type, index) => (
              <View style={styles.box2} key={index}>
                <Text style={styles.itemTitle}>{type}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.jobDesc}>
          {Details.map((desc, index) => {
            return (
              <DetailsCard
                key={index}
                title={desc.title}
                isActive={desc.title === active}
                onPress={() => setActive(desc.title)}
              />
            );
          })}
        </View>

        <View style={{padding: 20}}>
          <Text style={styles.jobDetails}>Job Description</Text>
          <View style={{marginTop: 10}}>
            <Text style={{fontWeight: '600'}}>{item.description}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.box3}>
        <TouchableOpacity style={styles.optionBox} activeOpacity={0.8}>
          <Ionicons name="bookmark-outline" size={25} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.applyBox} activeOpacity={0.8}>
          <Text style={styles.applyText}>Apply for Job</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JobDetail;
