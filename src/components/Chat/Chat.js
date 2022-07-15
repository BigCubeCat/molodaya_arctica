import {ScrollView, TextInput} from 'react-native';
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
      setAllMessages(data);
    };
    fetchReq().catch(console.error);
  }, []);
  const onSendMsg = () => {
    const fetchReq = async () => {
      let [data, error] = await getChat(chat_id);
      setAllMessages(data);
    };
    fetchReq().catch(console.error);
    setMessage('')
  };
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
        <View style={styles.send_form}>
          <TextInput
              style={styles.input}
              onChangeText={setMessage}
              value={message}
              placeholder="Ваш коментарий"
          />
          <Button
              buttonStyle={styles.send_button}
              onPress={() => {
                setMessage('')
                const fetchRequest = async () => {
                  await sendMessage(chat_id, user, message);
                };
                fetchRequest().then(() => onSendMsg()).catch(console.error);
              }}
          ><Icon name="send" color={'white'}/>
          </Button>
        </View>
      </View>

  );
}
const styles = StyleSheet.create({
  chat_bg: {},
  send_button: {
    width: 50,
    height: 50,
  },
  send_form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'space-between',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#adadad',
    height: 50,
  },
  chat: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    minWidth: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#adadad',
  },
});
