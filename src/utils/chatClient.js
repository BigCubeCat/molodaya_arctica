import {supabase} from './supabaseClient';

export async function getChat(chat_id = '0') {
  let {data, err} = await supabase.from('messages').select().eq('chat_id', chat_id);
  if (err) {
    return [null, err];
  }
  return [data, null];
}

export async function sendMessage(
    chat_id = '0', author = 'guest', message = 'test') {
  let {data, err} = await supabase.from('messages').insert([
    {chat_id: chat_id, author: author, message: message},
  ]);
  return err;
}