import React, {useState, useEffect} from 'react';
import {fetchAPI} from '../../utils/API';
import {ScrollView} from 'react-native';
import CustomCard from '../CustomCard/CustomCard';

export default function NewsPage() {
  const [posters, setPosters] = useState([]);
  const [currentPost, setPagePost] = useState(null);
  useEffect(async () => {
    const result = await fetchAPI(
        'https://molodaya-arctica.ru/api/content/feeds?page=1');
    setPosters(result.resources);
  }, []);
  if (currentPost === null) {
    return (
        <ScrollView>
          {posters.map((poster, poster_id) => {
            return <CustomCard
                id={'n' + poster.id}
                title={poster.title} cardContent={poster.caption}
                imageUri={poster.media[0].path}
                datetime={(new Date(poster.created_at)).toLocaleDateString()}
                chooseCallback={() => setPagePost(poster_id)}
            />;
          })}
        </ScrollView>
    );
  } else {
    const poster = posters[currentPost];
    console.log(poster)

    return <CustomCard
        id={'n' + poster.id}
        title={poster.title} cardContent={poster.caption}
        imageUri={poster.media[0].path}
        datetime={(new Date(poster.created_at)).toLocaleDateString()}
        text={poster.entity.content}
        chooseCallback={() => setPagePost(null)}
    />;
  }
}