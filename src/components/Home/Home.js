import React, {useEffect} from 'react';
import {View, StyleSheet, Button, ScrollView} from 'react-native';
import LogOff from '../LogOff/LogOff';
import {fetchAPI} from '../../utils/API';
import JobPage from '../Page/JobPage';
import NewsPage from '../Page/NewsPage';

const Home = ({navigation}) => {
  useEffect(async () => {
    const result = await fetchAPI(
        'https://molodaya-arctica.ru/api/content/feeds?page=1');
    // console.log(result)
  }, []);
  return (
      <ScrollView>
        <View style={styles.container}>
          <Button title="Go to Home"
                  onPress={() => navigation.navigate('Login')}/>
          <LogOff/>
          <JobPage/>
        </View>
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