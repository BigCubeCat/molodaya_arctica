import {StyleSheet, ScrollView} from 'react-native';
import Main from './src/components/Main/Main';
import Header from './src/components/Header/Header';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
      <SafeAreaProvider>
        <Header/>
        <Main/>
      </SafeAreaProvider>
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
