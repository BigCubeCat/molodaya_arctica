import {Card} from '@rneui/themed';
import {StyleSheet} from 'react-native-web';
import {Button, Icon, Text} from '@rneui/base';

export default function JobCard(
    {
      title = 'Должность',
      salary = 'По итогам собеседования',
      location = 'Мурманская область, г. Мончегорск, Нагорная улица, 184511, г Мончегорск, ул Нагорная, д. 34',
      owner = '',
      date = '10 июня',
    },
) {
  return (
      <Card containerStyle={styles.card}>
        <Text style={styles.owner}>{owner}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.info}>{salary} · {location}</Text>
        <Button
            type="solid"
            buttonStyle={{
              borderRadius: 10,
              margin: 10,
            }}
        >
          Подробнее
        </Button>
      </Card>

  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    minWidth: '90%',
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 12,
  },
  owner: {
    fontSize: 10,
    color: "grey",
  },
  info: {
    color: "grey",
    fontSize: 11,
    marginBottom: 10,
  },
});
