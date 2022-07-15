import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../Home/Home';
import React from 'react';
import EventsPage from '../Page/EventsPage';
import NewsSVG from '../SVG/news';
import EventsSVG from '../SVG/events';
import SpacesPage from '../Page/SpacesPage';
import AllPage from '../Page/AllPage';
import JobPage from '../Page/JobPage';

const DrawerNav = createDrawerNavigator();

const Drawer = () => {
  return (
      <DrawerNav.Navigator>
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