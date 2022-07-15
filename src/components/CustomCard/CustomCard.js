import {Card} from '@rneui/themed';
import {StyleSheet} from 'react-native-web';
import {Button, Icon, Text} from '@rneui/base';
import RenderHtml from 'react-native-render-html';

export default function MyCard(
    {
      title,
      imageUri,
      cardContent,
      datetime = '21 мая в 06:00',
      city = 'Мурманск',
      id = '0',
      num = 0,
      noMore = false,
        fullText="",
      chooseCallback = () => {
      },
        text=""
    }) {
  return (
      <Card containerStyle={styles.card}>
        <Card.Title>{title}</Card.Title>
        <Card.Divider/>
        <Card.Image
            style={styles.image}
            source={{
              uri: imageUri,
            }}
        />
        <Text style={{marginBottom: 10, marginTop: 10}}>
          {cardContent}
        </Text>
        <Text style={{marginBottom: 10, marginTop: 10}}>
          {fullText}
        </Text>
        <Text style={styles.infoText}>{datetime} · {city}</Text>
        {
          (text === "") ? null : <RenderHtml source={{html: text}} />
          }
        {
          (noMore) ? null :
              <Button
                  type="clear"
                  onPress={() => chooseCallback()}
                  buttonStyle={{
                    borderRadius: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                  }}
                  title={(text === "") ? "Подробнее": "Закрыть"}
              />
        }

      </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    padding: 1,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  card: {
    borderRadius: 10,
    minWidth: '90%',
  },
  infoText: {
    color: '#565862',
    fontSize: 10,
  },
});
