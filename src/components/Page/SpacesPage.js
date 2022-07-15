import React, {useState, useEffect} from 'react';
import {fetchAPI} from '../../utils/API';
import {ScrollView} from 'react-native';
import SpaceCard from '../CustomCard/SpaceCard';

export default function SpacesPage() {
  const [events, setEvents] = useState([]);
  const [currentSpace, setCurrenSpace] = useState(null);
  useEffect(async () => {
    const result = await fetchAPI(
        'https://molodaya-arctica.ru/api/content/spaces?page=1');
    setEvents(result.resources);
  }, []);
  console.log(events);
  if (currentSpace === null) {
    return (
        <ScrollView>
          {events.map((poster, poster_num) => {
            return <SpaceCard
                id={'s' + poster.id}
                title={poster.title}
                address={poster.address.title}
                imageUri={poster.media[0].path}
                description={poster.caption}
                callback={() => setCurrenSpace(poster_num)}
            />;
          })}
        </ScrollView>
    );
  } else {
    const poster = events[currentSpace];
    return <ScrollView><SpaceCard
        id={'s' + poster.id}
        title={poster.title}
        address={poster.address.title}
        imageUri={poster.media[0].path}
        caption={poster.entity.content}
        description={poster.caption}
        single={true}
        callback={() => setCurrenSpace(null)}
    /></ScrollView>;
  }
}
