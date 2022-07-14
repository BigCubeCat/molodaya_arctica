import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '@rneui/themed';
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
import {Button} from '@rneui/base';


const Header = () => {
    return (
        <View style={styles.container}>
            <HeaderRNE
                leftComponent={
                <Button style={styles.menu}>
                    <Icon name="menu" color={'white'}/>
                </Button>
                }
                centerComponent={{ text: 'Молодая Арктика', style: styles.heading }}
            >
            </HeaderRNE>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
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
        fontSize: 16,
        fontWeight: 'bold',
    },
    menu: {
        width: 10,
        height: 10,
    }
});

export default Header;