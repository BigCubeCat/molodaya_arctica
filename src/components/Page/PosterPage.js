import React, {useState, useEffect} from 'react';
import {fetchAPI} from '../../utils/API';
import {ScrollView} from 'react-native';
import CustomCard from '../CustomCard/CustomCard';

export default function PosterPage() {
  const [posters, setPosters] = useState([]);
  useEffect(async () => {
    const result = await fetchAPI(
        'https://molodaya-arctica.ru/api/content/feeds?page=1');
    setPosters(result.resources);
  }, []);
  return (
      <ScrollView>
        {posters.map(poster => {
          return <CustomCard
              title={poster.title} cardContent={poster.caption}
              imageUri={poster.media[0].path}
              datetime={(new Date(poster.created_at)).toLocaleDateString()}
          />;
        })}
      </ScrollView>
  );
}