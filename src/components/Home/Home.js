import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import CustomCard from '../CustomCard/CustomCard';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button title="Go to Home" onPress={() => navigation.navigate('Login')} />
            <CustomCard></CustomCard>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "blue"
    },
});
export default Home;