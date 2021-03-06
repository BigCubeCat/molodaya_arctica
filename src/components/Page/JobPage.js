import React, {useState, useEffect} from 'react';
import {fetchAPI} from '../../utils/API';
import {ScrollView} from 'react-native';
import JobCard from '../CustomCard/JobCard';


export default function JobPage() {
  const [jobs, setJobs] = useState([]);
  useEffect(async () => {
    const result = await fetchAPI(
        'https://molodaya-arctica.ru/api/content/jobs?page=1');
    setJobs(result.resources);
  }, []);

  return (
      <ScrollView>
        {jobs.map(poster => {
          let url = poster.entity.company["url"]
          return <JobCard
              id={'j'+poster.id}
              title={poster.title}
              location={poster.address.title}
              description={poster.caption}
              link={url}
          />;
        })}
      </ScrollView>
  );
}