/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import HomeListHeader from '../../components/HomeListHeader';
import AppBar from '../../components/AppBar';
import axios from 'axios';
import Entypo from 'react-native-vector-icons/Entypo';
import {useEffect, useState} from 'react';
import {HomeStyles as styles} from './styles';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        'https://remotive.io/api/remote-jobs?category=software-dev&limit=10',
      );
      setData(res.data.jobs);
    } catch (e) {
      console.log(e.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <AppBar />

      {isLoading ? (
        <ActivityIndicator color={'black'} size={'large'} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index}
          ListHeaderComponent={
            isLoading ? <ActivityIndicator /> : <HomeListHeader />
          }
          ItemSeparatorComponent={() => <View style={{paddingVertical: 10}} />}
          renderItem={({item}) => (
            <View style={{paddingHorizontal: 20}}>
              <TouchableHighlight
                style={styles.cardContainer}
                key={item.key}
                onPress={() => {
                  navigation.navigate('JobDetail', {
                    ...item,
                  });
                }}>
                <View style={styles.itemContainer}>
                  <View style={styles.itemCont}>
                    <Image
                      source={{
                        uri: item?.company_logo_url,
                      }}
                      style={styles.imageStyle}
                    />

                    <View>
                      <Text numberOfLines={1} style={styles.title}>
                        {item?.title}
                      </Text>
                      <View style={styles.cardView}>
                        <Text style={styles.companyName}>
                          {item?.company_name}
                        </Text>

                        <Entypo name="dot-single" size={18} color="#ccc" />

                        <Text style={styles.location}>
                          {item?.candidate_required_location}
                        </Text>
                      </View>
                    </View>
                  </View>

                  <Entypo name="dots-three-vertical" size={18} color="#000" />
                </View>
              </TouchableHighlight>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default HomeScreen;
