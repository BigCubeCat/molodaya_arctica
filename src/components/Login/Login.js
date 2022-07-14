import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Text} from '@rneui/themed';
import {AppContext} from "../../../App";
import {Input, Icon, Button} from '@rneui/themed';
import { AsyncStorage } from 'react-native';

const Login = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {isSignedIn, setIsSignedIn} = React.useContext(AppContext)

    const onPressLogin = async () => {
        const response = await fetch("https://molodaya-arctica.ru/api/auth/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: 'konstantin.re@gmail.com', password: '20VCfELuOPqTz2'})
        })
        const result = await response.json()
        console.log("acces_token = ", result.access_token)
        if(result.access_token){
            await AsyncStorage.setItem(
                'access_token',
                result.access_token
            );
            setIsSignedIn(true)
            navigation.navigate('Home')
        }
    }
    return (
        <View style={styles.container}>
            <Text>Вход в приложение</Text>
            <Input
                placeholder='Имя пользователя'
                onChangeText={value => setEmail(value)}
            />
            <Input
                placeholder='Пароль'
                onChangeText={value => setPassword(value)}
            />
            <Button title="Вход" onPress={onPressLogin}/>
       </View>
    );
};
const {height} = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: height * 0.1,
        marginRight: height * 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
});

export default Login;
