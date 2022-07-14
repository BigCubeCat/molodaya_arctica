import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import Login from "./src/components/Login/Login"
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {fetchAPI} from "./src/utils/API";
import Drawer from "./src/components/Drawer/Drawer";
import 'react-native-url-polyfill/auto'; // FOR supabase works


export const AppContext = React.createContext(null);

const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(null)
    const [user, setUser] = useState("guest");
    useEffect(() => {
        fetchAPI("https://molodaya-arctica.ru/api/auth/user").then((r) => {
            setIsSignedIn(true)
            setUser(r)
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
                        {isSignedIn === false ? (
                            <Login/>) : (
                            <Drawer/>)
                        }
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
    },
});

export default App;
