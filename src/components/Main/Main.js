import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '@rneui/themed';


const Main = () => {
    return (
        <View style={styles.container}>
            <Text>Молодая Арктика!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
});

export default Main;
