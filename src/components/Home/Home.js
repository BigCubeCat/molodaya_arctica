import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CustomCard from '../CustomCard/CustomCard';

const Home = () => {
    return (
        <SafeAreaProvider style={styles.container}>
            <CustomCard title={"F"}></CustomCard>
        </SafeAreaProvider>
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