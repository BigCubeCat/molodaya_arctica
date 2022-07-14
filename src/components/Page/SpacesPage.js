import React, {useState, useEffect} from 'react';
import {fetchAPI} from '../../utils/API';
import {ScrollView} from 'react-native';
import SpaceCard from '../CustomCard/SpaceCard';

export default function SpacesPage() {
  const [events, setEvents] = useState([]);
  useEffect(async () => {
    const result = await fetchAPI(
        'https://molodaya-arctica.ru/api/content/spaces?page=1');
    setEvents(result.resources);
  }, []);
  return (
      <ScrollView>
        {events.map(poster => {
          return <SpaceCard
              title={poster.title}
              address={poster.address.title}
              imageUri={poster.media[0].path}
              description={poster.caption}
          />;
        })}
      </ScrollView>
  );
}