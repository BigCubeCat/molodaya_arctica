import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Login from "./src/components/Login/Login"
import Header from "./src/components/Header/Header"
import Home from "./src/components/Home/Home"
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMWE1YjQ5ZjVkNWQ1OTRmOTY3YTVmNjg4M2E3MjgyNmJhMGZjYWVmZmQ3OTZiY2UyNTZhYTc2MTRmNWNiMWI0Mjk4YjI2MzVjYmUxYTk4N2QiLCJpYXQiOjE2NTc3OTk4OTMuODk4MywibmJmIjoxNjU3Nzk5ODkzLjg5ODMwMiwiZXhwIjoxNjg5MzM1ODkzLjg2Nzc1NCwic3ViIjoiMjciLCJzY29wZXMiOltdfQ.f0aPeHAuXuzjt4J45HLrdVsvRc_S34KyRLbILP70mJELAJ2uml9hL4qcyfroYnC5TFFnh1oywLEUrJmkZ6iXDhiZTG87ZnghaLXOW3DVnURvgWhvlc2g10aaQpeh8qNIMMw2rWr37hnluSrVTnySkm2kGDTGB_L05O-AG-NGW8lK9ItWomXAhdkAHkAgyLYXUmEL8bZCHF7_MyWSmnA8cil2JB9xtSlFSoW5TltxxGFFBiO0Vw-9ogZPamW-F2jUYHBLWbN2dJV5YJmzb7nCYs-i0R8f9SJIYyBKhfOKQKTHzGAd0UrLH_6kOtscWkt3rNNCJd7gX8PMwa3gtQaV_kker6OSeXEwukuhaegdNr3l6SERQQ1IrqBMUfzIKF30rtEqiw7RVhw4GYXAHkNAJ04I339yHfuMRlSAuG_4fm4U1GmTy8CKP_9b1xBtlBQWDce29hp0a7dpUdNy8q-geDy7ThwgX2SptQsb8WHj0KleFzSG2yHE8jtBUloV_5yERi1XiwSGlzIWK8Ah-z8Zu_CxrZwOkHGND0LKLKpJRIxztL6KV4lMzpbwgzdOymc0lZzE-p3ZJwuaI5Y1qKx7e5MbGUGORE8PJ3_KKAWFGXjUiElXjO3FfWq8TrzdIBlBOm7dVPAMg-EXlDIWawLOfuC0s2LLwq4sLhsob5G3f9M'


const Stack = createNativeStackNavigator();

const App = () => {
    const [token, setToken] = useState(null)
    useEffect(() => {
        fetch("https://molodaya-arctica.ru/api/auth/user")
    }, [])

    return (
        <NavigationContainer>
            <ScrollView contentContainerStyle={styles.container}>
                <Stack.Navigator screenOptions={{
                    headerShow: true, header: (p) =>
                        <Header/>
                }}>
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Login" component={Login}/>
                </Stack.Navigator>
            </ScrollView>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
