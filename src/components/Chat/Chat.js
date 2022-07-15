import {ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Button, Icon, Input, Text} from '@rneui/base';
import {StyleSheet} from 'react-native-web';
import {getChat, sendMessage} from '../../utils/chatClient';
import {AppContext} from '../../../App';
import Message from './Message';

export default function Chat({chat_id = '0'}) {
  const {isSignedIn, setIsSignedIn, user, setUser} = React.useContext(
      AppContext);
  const [message, setMessage] = useState('');
  const [allMessages, setAllMessages] = useState([]);
  useEffect(() => {
    const fetchReq = async () => {
      let [data, error] = await getChat(chat_id);
      console.log(data, error);
      setAllMessages(data);
    };
    fetchReq().catch(console.error);
  }, [message]);
  return (
      <View style={styles.chat}>
        <View>
          {
            allMessages.map(
                mess => <Message
                    text={mess.message}
                    myself={mess.author == user}
                />)
          }
        </View>
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
                  console.error(error);
                }
              };
              fetchRequest().then(setMessage('')).catch(console.error);
            }}
        >Отправить <Icon name="send" color={'white'}/>
        </Button>

      </View>

  );
}
const styles = StyleSheet.create({
  chat_bg: {},
  send_button: {
    borderRadius: 10,
  },
  send_form: {
    flexDirection: 'row',
  },
  input: {
    width: '100%',
  },
  chat: {
    alignSelf: 'center',
    marginTop: 20,
    minWidth: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#adadad',
  },
});
