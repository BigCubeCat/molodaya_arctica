import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {Text} from '@rneui/themed';


const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
});

export default Login;
