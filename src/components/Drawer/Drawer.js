import {
    createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList, DrawerItem
} from '@react-navigation/drawer';
import Home from '../Home/Home';
import React from 'react';
import EventsPage from '../Page/EventsPage';
import NewsSVG from '../SVG/news';
import EventsSVG from '../SVG/events';
import SpacesPage from '../Page/SpacesPage';
import {AsyncStorage, Text, View} from "react-native";
import {AppContext} from "../../../App";
import AllPage from '../Page/AllPage';
import JobPage from '../Page/JobPage';

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
                backgroundColor: "#383B46", bottom: 0, position: 'absolute', width: '100%' }}>
                <DrawerItem label={() =>
                    <Text style={{color: 'white'}}>Выйти</Text>}
                            onPress={logOff}
                ></DrawerItem>
            </View>
        </DrawerContentScrollView>
    );
}


const Drawer = () => {
  return (
      <DrawerNav.Navigator  drawerContent={(props) => <CustomDrawerContent {...props} />}>
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
              <EventsSVG/>
          ),
        }}/>
      </DrawerNav.Navigator>
  );
};

export default Drawer;