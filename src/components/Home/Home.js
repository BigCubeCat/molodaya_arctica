import React, {useEffect} from 'react';
import {View, StyleSheet, Button, ScrollView} from 'react-native';
import CustomCard from '../CustomCard/CustomCard';
import SpaceCard from '../CustomCard/SpaceCard';
import JobCard from '../CustomCard/JobCard';
import {fetchAPI} from '../../utils/API';
import NewsPage from '../Page/NewsPage';
import EventsPage from '../Page/EventsPage';

const Home = ({navigation}) => {
  return (
      <ScrollView>
        <View style={styles.container}>
          <Button title="Go to Home"
                  onPress={() => navigation.navigate('Login')}/>
        </View>
        <EventsPage />
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;