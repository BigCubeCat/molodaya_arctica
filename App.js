import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Main from "./src/components/Main/Main"
import Header from "./src/components/Header/Header"

const App = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header/>
            <Main/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
