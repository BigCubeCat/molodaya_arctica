import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from "../Home/Home";
import EventsPage from "../Page/EventsPage";
import NewsSVG from "../SVG/news";
import EventsSVG from "../SVG/events";

const DrawerNav = createDrawerNavigator();

const Drawer = () => {
    return (
        <DrawerNav.Navigator >
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
        </DrawerNav.Navigator>
    );
}

export default Drawer