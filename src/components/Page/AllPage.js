import React, {useState, useEffect} from 'react';
import {fetchAPI} from '../../utils/API';
import {BackHandler, ScrollView} from 'react-native';
import CustomCard from '../CustomCard/CustomCard';
import Chat from '../Chat/Chat';
import {Button, Text} from '@rneui/base';

export default function AllPage() {
  const [posters, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(async () => {
    const news = await fetchAPI(
        'https://molodaya-arctica.ru/api/content/feeds?page=1'
    )
    const result = await fetchAPI(
        'https://molodaya-arctica.ru/api/content/events?page=1');
    setEvents(result.resources);
    setNews(news.resources)
  }, []);
  if (currentCard === null) {
    return (
        <ScrollView>
          {posters.map(poster => {
            return <CustomCard
                id={'n'+poster.id}
                title={poster.title} cardContent={poster.caption}
                imageUri={poster.media[0].path}
                datetime={(new Date(poster.created_at)).toLocaleDateString()}
            />;
          })}
          {events.map((poster, num) => {
            return <CustomCard
                id={'e' + poster.id}
                num={num} chooseCallback={() => setCurrentCard(num)}
                title={poster.title} cardContent={poster.caption}
                imageUri={poster.media[0].path}
                city={poster.address.settlement}
                datetime={(new Date(poster.created_at)).toLocaleDateString()}
            />;
          })}
        </ScrollView>
    );
  } else {
    const poster = events[currentCard];
    BackHandler.addEventListener('hardwareBackPress', function () {setCurrentCard(null)})
    return (
        <ScrollView>
          <Button
              type={"clear"}
              onPress={() => setCurrentCard(null)}
              buttonStyle={{marginTop: 10}}
          >
            <Text style={{color: 'black'}}>
              Назад
            </Text>
          </Button>
          <CustomCard
              id={'e' + poster.id}
              num={null} chooseCallback={() => setCurrentCard(null)}
              title={poster.title} cardContent={poster.caption}
              imageUri={poster.media[0].path}
              city={poster.address.settlement}
              fullText={poster.entity.content.split('>')[1].split('<')[0]}
              noMore={true}
              datetime={(new Date(poster.created_at)).toLocaleDateString()} />
          <Chat chat_id={'e' + poster.id} />
        </ScrollView>
    )
  }
}