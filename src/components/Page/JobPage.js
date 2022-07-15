import React, {useState, useEffect} from 'react';
import {fetchAPI} from '../../utils/API';
import {ScrollView} from 'react-native';
import SpaceCard from '../CustomCard/SpaceCard';

export default function SpacesPage() {
  const [jobs, setJobs] = useState([]);
  useEffect(async () => {
    const result = await fetchAPI(
        'https://molodaya-arctica.ru/api/content/jobs?page=1');
    setJobs(result.resources);
  }, []);
  return (
      <ScrollView>
        {jobs.map(poster => {
          return <SpaceCard
              id={'j'+poster.id}
              title={poster.title}
              location={poster.address.title}
              description={poster.caption}
              // TODO: FIX salary
          />;
        })}
      </ScrollView>
  );
}