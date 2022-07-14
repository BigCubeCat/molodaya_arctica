import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {Text} from '@rneui/themed';


const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Молодая Арктика!</Text>
            <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
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

export default Home;
