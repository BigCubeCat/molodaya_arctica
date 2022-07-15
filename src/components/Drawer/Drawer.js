import {
    createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList, DrawerItem
} from '@react-navigation/drawer';
import Home from '../Home/Home';
import React from 'react';
import EventsPage from '../Page/EventsPage';
import NewsSVG from '../SVG/news';
import EventsSVG from '../SVG/events';
import LogOffSVG from '../SVG/logOff'
import SpacesPage from '../Page/SpacesPage';
import {AsyncStorage, Text, View} from "react-native";
import {AppContext} from "../../../App";
import AllPage from '../Page/AllPage';
import JobPage from '../Page/JobPage';
import WorkSVG from "../SVG/work";

const DrawerNav = createDrawerNavigator();

function CustomDrawerContent(props) {
    const {setIsSignedIn} = React.useContext(AppContext)

    const logOff = async () => {
        await AsyncStorage.removeItem("access_token")
        setIsSignedIn(false)
    }
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1, justifyContent: 'space-between'}}>
            <View>
                <DrawerItemList {...props} />
            </View>
            <View style={{
                backgroundColor: "#383B46", bottom: 0, position: 'absolute', width: '100%'
            }}>
                <DrawerItem label={() =>
                    <View style={{flex:1,flexDirection:"row"}}><LogOffSVG/><Text style={{color: 'white', marginLeft:15, marginTop:1}}>Выйти</Text></View>
                }
                            onPress={logOff}
                ></DrawerItem>
            </View>
        </DrawerContentScrollView>
    );
}


const Drawer = () => {
    return (
        <DrawerNav.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <DrawerNav.Screen name="Актуальное" component={AllPage} options={{
                drawerIcon: ({focused, size}) => (
                    <NewsSVG/>
                ),
            }}/>
            <DrawerNav.Screen name="Новости" component={Home} options={{
                drawerIcon: ({focused, size}) => (
                    <NewsSVG/>
                ),
            }}/>
            <DrawerNav.Screen name="События" component={EventsPage} options={{
                drawerIcon: ({focused, size}) => (
                    <EventsSVG/>
                ),
            }}/>
            <DrawerNav.Screen name="Пространства" component={SpacesPage} options={{
                drawerIcon: ({focused, size}) => (
                    <EventsSVG/>
                ),
            }}/>
            <DrawerNav.Screen name="Работа" component={JobPage} options={{
                drawerIcon: ({focused, size}) => (
                    <WorkSVG/>
                ),
            }}/>
        </DrawerNav.Navigator>
    );
};

export default Drawer;