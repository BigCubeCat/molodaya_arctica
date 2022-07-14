import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Header as HeaderRNE, Icon, Text} from '@rneui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Overlay} from '@rneui/base';

const Header = () => {
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible)
    }
    return (
        <SafeAreaProvider>
            <HeaderRNE
                leftComponent={
                    <View>
                        <Button type="solid" onPress={toggleOverlay}>
                            <Icon name="menu" color="white"/>
                        </Button>
                    </View>
                }
                centerComponent={{text: 'Молодая Арктика', style: styles.heading}}
            />
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <Text style={styles.textPrimary}>Hello!</Text>
                <Text style={styles.textSecondary}>
                    Welcome to React Native Elements
                </Text>
                <Button
                    icon={
                        <Icon
                            name="wrench"
                            type="font-awesome"
                            color="white"
                            size={25}
                            iconStyle={{ marginRight: 10 }}
                        />
                    }
                    title="Start Building"
                    onPress={toggleOverlay}
                />
            </Overlay>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {},
    heading: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        margin: 10,
    },
    textPrimary: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 20,
    },
    textSecondary: {
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 17,
    },
});

export default Header;