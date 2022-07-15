import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import {Text} from '@rneui/themed';
import {AppContext} from "../../../App";
import {Input, Icon, Button} from '@rneui/themed';
import {AsyncStorage} from 'react-native';
import {CheckBox} from "@rneui/themed";

const Login = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {isSignedIn, setIsSignedIn} = React.useContext(AppContext)
    const [rememberMe, setRememberMe] = useState(false)
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
        if (result.access_token) {
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
            <View style={styles.top}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logo.png')}
                />
                <Text style={styles.heading}>Добро пожаловать</Text>
            </View>

            <Input
                label="Электропочта*"
                placeholder='E-mail'
                onChangeText={value => setEmail(value)}
            />
            <Input
                label="Пароль*"
                placeholder='Введите пароль'
                onChangeText={value => setPassword(value)}
                secureTextEntry={true}
            />
            <View style={styles.checkBoxWrapper}>
                <CheckBox
                    center
                    title="Запомнить меня"
                    checked={rememberMe}
                    onPress={() => setRememberMe(!rememberMe)}
                />
            </View>
            <Button buttonStyle={styles.button} title="Войти" onPress={onPressLogin}/>
        </View>
    );
};
const {height} = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: height * 0.05,
        marginRight: height * 0.05,
        justifyContent: "center",
        alignItems: "center"
    },
    top: {
        width: "100%",
        marginBottom: 32,
        alignItems: "flex-start"
    },
    checkBoxWrapper: {
        width: 345,
        alignItems: "flex-start",
    },
    button: {
        borderRadius: 12,
        backgroundColor: '#EE5203',
        height: 50,
        width: 310
    },
    heading: {
        color: '#060917',
        fontSize: 32,
        marginTop: 40
    },
    logo: {
        width: 172,
        height: 44,
    }
});

export default Login;
