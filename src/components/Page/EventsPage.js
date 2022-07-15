import React, {useState, useEffect} from 'react';
import {fetchAPI} from '../../utils/API';
import {ScrollView} from 'react-native';
import CustomCard from '../CustomCard/CustomCard';

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  useEffect(async () => {
    const result = await fetchAPI(
        'https://molodaya-arctica.ru/api/content/events?page=1');
    setEvents(result.resources);
  }, []);
  return (
      <ScrollView>
        {events.map(poster => {
          return <CustomCard
              id={'e'+poster.id}
              title={poster.title} cardContent={poster.caption}
              imageUri={poster.media[0].path}
              city={poster.address.settlement}
              datetime={(new Date(poster.created_at)).toLocaleDateString()}
          />;
        })}
      </ScrollView>
  );
}