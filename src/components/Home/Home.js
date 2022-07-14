import React, {useEffect} from 'react';
import {View, StyleSheet, Button, ScrollView} from 'react-native';
import LogOff from '../LogOff/LogOff';
import NewsPage from '../Page/NewsPage';

const Home = ({navigation, user}) => {
  return (
      <ScrollView>
        <View style={styles.container}>
          <Button title="Go to Home"
                  onPress={() => navigation.navigate('Login')}/>
          <LogOff/>
          <NewsPage user={user}/>
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