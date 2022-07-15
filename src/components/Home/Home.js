import React from 'react';
import {View, StyleSheet, Button, ScrollView} from 'react-native';
import NewsPage from '../Page/NewsPage';

const Home = ({ user}) => {
  return (
      <ScrollView>
        <View style={styles.container}>
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