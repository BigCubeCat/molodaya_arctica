import {useState, useEffect} from 'react';
import {fetchAPI} from '../../utils/API';
import {ScrollView} from 'react-native';
import CustomCard from '../CustomCard/CustomCard';

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  useEffect(async () => {
    const result = await fetchAPI(
        'https://molodaya-arctica.ru/api/content/events?page=1');
    console.log(result.resources[0])
    setEvents(result.resources);
  }, []);
  return (
      <ScrollView>
        {events.map(poster => {
          return <CustomCard
              title={poster.title} cardContent={poster.caption}
              imageUri={poster.media[0].path}
              city={poster.address.settlement}
              datetime={(new Date(poster.created_at)).toLocaleDateString()}
          />;
        })}
      </ScrollView>
  );
}