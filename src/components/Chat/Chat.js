import {ScrollView} from 'react-native';
import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Icon, Input} from '@rneui/base';
import {StyleSheet} from 'react-native-web';
import {sendMessage} from '../../utils/chatClient';
import {AppContext} from "../../../App";

export default function Chat({chat_id = '0'}) {
  const {isSignedIn, setIsSignedIn, user, setUser} = React.useContext(AppContext)
  const [message, setMessage] = useState('');
  return (
      <View>
        <ScrollView>

        </ScrollView>
        <Input
            style={styles.input}
            placeholder="Comment"
            onChangeText={value => setMessage(value)}
        />
        <Button
            buttonStyle={styles.send_button}
            onPress={() => {
              const fetchRequest = async () => {
                let {data, error} = await sendMessage(chat_id, user, message);
                if (error) {
                  console.error(error)
                }
              }
              fetchRequest().then(setMessage("")).catch(console.error)
            }}
        >Отправить <Icon name="send" color={'white'}/>
        </Button>

      </View>

  );
}
const styles = StyleSheet.create({
  send_button: {
    borderRadius: 100,
  },
  send_form: {
    flexDirection: 'row',
  },
  input: {
    width: 10,
  },
});
