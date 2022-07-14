import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '@rneui/themed';
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';


const Header = () => {
    return (
        <View style={styles.container}>
            <HeaderRNE
                leftComponent={{
                    icon: 'menu',
                    color: '#fff',
                }}
                centerComponent={{ text: 'Header', style: styles.heading }}
            >
            </HeaderRNE>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'grey',
        height:100,
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#397af8',
        marginBottom: 20,
        width: '100%',
        paddingVertical: 15,
    },
    heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default Header;