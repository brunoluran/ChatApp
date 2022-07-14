import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../firebase';

export default function ChatRoom() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Chat Room!</Text>
      <Button title='Button' onPress={() => navigation.navigate('Register')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
