import {ScrollView} from 'react-native';
import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Icon, Input} from '@rneui/base';
import {StyleSheet} from 'react-native-web';
import {sendMessage} from '../../utils/chatClient';

export default function Chat({chat_id = '0'}) {
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
            onPress={() => sendMessage(chat_id, "", message)}
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
