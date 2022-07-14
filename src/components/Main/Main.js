import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text} from '@rneui/base';

const Main = () => {
  return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Text>Молодая Арктика!</Text>
        </View>
      </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Main;