import React, {useEffect} from 'react';
import {View, StyleSheet, Button, ScrollView} from 'react-native';
import CustomCard from '../CustomCard/CustomCard';
import SpaceCard from '../CustomCard/SpaceCard';
import JobCard from '../CustomCard/JobCard';
import {fetchAPI} from '../../utils/API';
import PosterPage from '../Page/PosterPage';

const Home = ({navigation}) => {
    useEffect(async ()=>{
        const result = await fetchAPI("https://molodaya-arctica.ru/api/content/feeds?page=1")
        console.log(result)
    },[])
  return (
      <ScrollView>
        <View style={styles.container}>
          <Button title="Go to Home"
                  onPress={() => navigation.navigate('Login')}/>
          <PosterPage />
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