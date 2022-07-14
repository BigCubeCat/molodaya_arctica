import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '@rneui/themed';


const Header = () => {
    return (
        <View style={styles.container}>
            <Text>Header!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
});

export default Header;
