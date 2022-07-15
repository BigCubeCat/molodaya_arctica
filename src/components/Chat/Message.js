import {View} from 'react-native';
import {StyleSheet} from 'react-native-web';
import {Text} from '@rneui/base';

const Message = ({text, myself = false, author}) => {
    return (
        <View><>
            <View style={
                {
                    ...styles.message, alignSelf: (myself) ? "flex-end" : "flex-start",
                    backgroundColor: (myself) ? "#8E2DE2" : "green"
                }
            }>
                <Text style={{
                    fontSize: 6,
                    color: 'white'

                }}>{author}:</Text>
                <Text style={{...styles.text, textAlign: (myself) ? "right" : "left"}}>
                    {text}
                </Text>
            </View>
            </>
        </View>
    )
}

const styles = StyleSheet.create({
    message: {
        borderRadius: 10,
        padding: 12,
        margin: 10,
    },
    text: {
        color: 'white',
        margin: 5
    },
})

export default Message;
