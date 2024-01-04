import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// amplify
import Amplify from 'aws-amplify';
import config from './src/aws-exports';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
