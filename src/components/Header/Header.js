import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Header as HeaderRNE, Icon, Text} from '@rneui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Header = () => {
  return (
      <SafeAreaProvider>
        <HeaderRNE
            leftComponent={
              <View>
                <Button type="solid">
                  <Icon name="menu" color="white"/>
                </Button>
              </View>
            }
            centerComponent={{text: 'Молодая Арктика', style: styles.heading}}
        />
      </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {},
  heading: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Header;
