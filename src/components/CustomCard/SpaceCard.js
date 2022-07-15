import {View} from 'react-native';
import {StyleSheet} from 'react-native-web';
import {Card, Image} from '@rneui/themed';
import {Button, Icon, Text} from '@rneui/base';
import RenderHtml from 'react-native-render-html';


export default function SpaceCard(
    {
      title = 'Апатиты',
      address = 'Мурманская обл, г Апатиты, ул Фестивальная, д 23А',
      imageUri = 'https://randomuser.me/api/portraits/men/36.jpg',
      description = 'В городе Кандалакша, современное молодежное пространство «Arctic Space», концепцию которого модернизирована и разработана Дизайн-заводом "Флакон" (г. Москва)',
      caption = '',
      callback = () => {
      },
        single=false,
    },
) {
  return (
      <Card containerStyle={styles.card}>
        <View style={styles.row}>
          <Card.Image source={imageUri}/>
          <View style={styles.title}>
            <Text>{title}</Text>
            <Text style={styles.address}>{address}</Text>
          </View>
        </View>
        <Text style={styles.description}>{description}</Text>
        {(caption.length > 0) ? <RenderHtml source={{html: caption}} /> : null}
        <Button
            type="clear"
            onPress={callback}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
        >
          {(single) ? "Закрыть": "Подробнее"}
        </Button>
      </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    minWidth: '90%',
    maxWidth: '90%',
  },
  title: {
    marginRight: 5,
  },
  row: {
    flexDirection: 'row',
    alignContent: 'space-around',
  },
  address: {
    color: '#565862',
    fontSize: 10,
    maxWidth: '80%',
  },
  description: {
    color: '#565862',
    fontSize: 10,
  },
});