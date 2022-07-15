import {View} from 'react-native';
import {StyleSheet} from 'react-native-web';
import {Text} from '@rneui/base';

const Message = ({text, myself=false}) => {
  const messageStyle = (myself) ? styles.my_message : styles.other_message;
  return (
      <View style={messageStyle} >
        <Text>
          {text}
        </Text>
      </View>
  )
}

const styles = StyleSheet.create({
  my_message: {
    backgroundColor: "#8E2DE2",
    borderRadius: 10,
    padding: 5,
    margin: 5,
  },
  other_message: {
    minHeight: 80,
    background: "linear-gradient(to right, #134e5e, #71b280);",
    fontSize: 15,
}
})

export default Message;
