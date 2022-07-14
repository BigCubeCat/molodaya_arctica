import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from "../Home/Home";

const DrawerNav = createDrawerNavigator();

const Drawer = () => {
    return (
        <DrawerNav.Navigator>
            <DrawerNav.Screen name="Новости" component={Home}/>
        </DrawerNav.Navigator>
    );
}

export default Drawer