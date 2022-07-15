import {View} from 'react-native';
import {StyleSheet} from 'react-native-web';
import {Text} from '@rneui/base';

const Message = ({text, myself=false}) => {
  return (
      <View style={
        {...styles.message, alignSelf: (myself) ? "flex-end" : "flex-start",
        backgroundColor: (myself) ? "#8E2DE2" : "green"}
      }>
        <Text style={{...styles.text, textAlign: (myself) ? "right":"left"}}>
          {text}
        </Text>
      </View>
  )
}

const styles = StyleSheet.create({
  message: {
    borderRadius: 10,
    width: '60%',
    padding: 5,
    margin: 10,
  },
  text: {
    color: 'white',
    margin: 5
  },
})

export default Message;
