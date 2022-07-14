import {StyleSheet, ScrollView} from 'react-native';
import Main from './src/components/Main/Main';
import {Header} from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
      <ScrollView >
        <Header/>
        <Main/>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
