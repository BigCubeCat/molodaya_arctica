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
    setMessage('');
  };
  console.log(user)
  return (
      <View>
        <View style={styles.chat}>
          <View>
            {
              allMessages.map(
                  mess => <Message
                      text={mess.message}
                      myself={mess.author == user}
                      author={mess.author}
                  />)
            }
          </View>

        </View>
        <View style={styles.send_form}>
          <Input
              placeholder="Комментарии к событию"
              containerStyle={styles.input}
              leftIcon={{ type: 'font-awesome', name: 'comment' }}
              onChangeText={setMessage}
              size={24}
          />
          <Button
              buttonStyle={styles.send_button}
              onPress={() => {
                setMessage('');
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
    width: '50%',
    height: 50,
    backgroundColor: '#7D3EDC',
  },
  send_form: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'space-between',
  },
  input: {
    width: '85%',
    marginBottom:-24
  },
  chat: {
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 20,
    width: '93%',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'lightgrey',
  },
});
