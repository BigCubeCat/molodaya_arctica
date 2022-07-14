import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import Login from "./src/components/Login/Login"
import Header from "./src/components/Header/Header"
import Home from "./src/components/Home/Home"
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {fetchAPI} from "./src/utils/API";


const Stack = createNativeStackNavigator();

export const AppContext = React.createContext(null);

const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(null)
    useEffect(() => {
        fetchAPI("https://molodaya-arctica.ru/api/auth/user").then((r) => {
            setIsSignedIn(true)
        }).catch((e) => {
            // if (e.message === "Unauthenticated.") {
            setIsSignedIn(false)
            // }
        })
    }, [])

    if (isSignedIn === null) {
        return <View><Text>Loading</Text></View>
    }

    return (
        <SafeAreaProvider>
            <AppContext.Provider value={{isSignedIn, setIsSignedIn}}>
                <NavigationContainer>
                    <ScrollView contentContainerStyle={styles.container}>
                        <Stack.Navigator screenOptions={{
                            headerShow: true, header: (p) =>
                                isSignedIn && <Header/>
                        }}>
                            {isSignedIn === false ? (
                                <>
                                    <Stack.Screen name="Login" component={Login}/>
                                </>
                            ) : (
                                <>
                                    <Stack.Screen name="Home" component={Home}/>
                                </>
                            )}
                        </Stack.Navigator>
                    </ScrollView>
                </NavigationContainer>
            </AppContext.Provider>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'green'
    },
});

export default App;
