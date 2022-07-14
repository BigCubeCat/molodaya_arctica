import React from 'react';
import {Button} from 'react-native';
import {AppContext} from "../../../App";
import {AsyncStorage} from 'react-native';

const LogOff = () => {
    const {setIsSignedIn} = React.useContext(AppContext)

    const logOff = async () => {
        await AsyncStorage.removeItem("access_token")
        setIsSignedIn(false)
    }
    return (
        <Button title="Log off" onPress={logOff}/>

    );
};

export default LogOff;