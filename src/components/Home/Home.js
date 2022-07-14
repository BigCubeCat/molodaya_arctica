import React from 'react';
import {View, StyleSheet} from 'react-native';
import CustomCard from '../CustomCard/CustomCard';

const Home = () => {
    return (
        <View style={styles.container}>
            <CustomCard></CustomCard>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#F00"
    },
});
export default Home;