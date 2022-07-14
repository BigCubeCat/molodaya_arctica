import {createClient} from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(
    'https://rpggnolocagqsbdwgkps.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwZ2dub2xvY2FncXNiZHdna3BzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc2ODY4ODIsImV4cCI6MTk3MzI2Mjg4Mn0.5GodXSo19vD8yR0Q39KJ3dm9hy4meBGwyhxmzsr5CAM',
);

export function getChat(chat_id = '0') {
  const fetchResponse = async () => {
    const {data, error} = await supabase.from('messages').select().eq('chat_id', chat_id);
    return data;
  };
  return fetchResponse().catch(console.error)
}