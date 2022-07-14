import {View} from 'react-native';
import {StyleSheet} from 'react-native-web';
import {Card, Image} from '@rneui/themed';
import {Button, Icon, Text} from '@rneui/base';
import {Avatar} from '@rneui/base/dist/Avatar/Avatar';

export default function SpaceCard(
    {
      title = 'Апатиты',
      address = 'Мурманская обл, г Апатиты, ул Фестивальная, д 23А',
      imageUri = 'https://randomuser.me/api/portraits/men/36.jpg',
      description = 'В городе Кандалакша, современное молодежное пространство «Arctic Space», концепцию которого модернизирована и разработана Дизайн-заводом "Флакон" (г. Москва)',
        user=""
    },
) {
  return (
      <Card containerStyle={styles.card}>
        <View style={styles.row}>
          <Avatar rounded={true} size={64} source={imageUri}
                  avatarStyle={{padding: 5}}/>
          <View style={styles.title}>
            <Text>{title}</Text>
            <Text style={styles.address}>{address}</Text>
          </View>
        </View>
        <Text style={styles.description}>{description}</Text>
        <Button
            type="clear"
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
        >
          Подробнее
          <Icon name="arrow-right" color={'#397af8'}/>
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
    maxWidth: '80%'
  },
  description: {
    color: '#565862',
    fontSize: 10,
  },
});