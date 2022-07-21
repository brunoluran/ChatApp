import {
  Container,
  FlatList,
  KeyboardAvoidingView,
  ViewInputContainer,
  TextInput,
  InputArea,
  IconArea,
} from './style';
import { StatusBar } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { Platform } from 'react-native';
import { useState, useEffect } from 'react';
import firebase from '../../firebase';

import ChatMessages from '../../components/ChatMessages';

export default function Messages({ route }) {
  const { thread } = route.params;
  const [messages, setMessages] = useState([]);
  const [myMessageInput, setMyMessageInput] = useState('');

  const user = firebase.auth().currentUser.toJSON();

  useEffect(() => {
    const unsubscribeListener = firebase
      .firestore()
      .collection('MESSAGE_THREADS')
      .doc(thread._id)
      .collection('MESSAGES')
      .orderBy('createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        const messages = querySnapshot.docs.map((doc) => {
          const firebaseData = doc.data();

          const data = {
            _id: doc.id,
            text: '',
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            ...firebaseData,
          };

          if (!firebaseData.system) {
            data.user = {
              ...firebaseData.user,
              name: firebaseData.user.displayName,
            };
          }

          return data;
        });

        setMessages(messages);
        console.log(messages);
      });

    return () => unsubscribeListener();
  }, []);

  async function handleSend() {
    if (myMessageInput === '') return;
    await firebase
      .firestore()
      .collection('MESSAGE_THREADS')
      .doc(thread._id)
      .collection('MESSAGES')
      .add({
        text: myMessageInput,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        user: {
          _id: user.uid,
          displayName: user.displayName,
        },
      });

    await firebase
      .firestore()
      .collection('MESSAGE_THREADS')
      .doc(thread._id)
      .set(
        {
          lastMessage: {
            text: myMessageInput,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          },
        },
        { merge: true }
      );
    setMyMessageInput('');
  }

  return (
    <Container>
      <StatusBar backgroundColor={'#fff'} barStyle='dark-content' />
      <FlatList
        data={messages}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <ChatMessages data={item} />}
        inverted={true}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={60}
      >
        <ViewInputContainer>
          <InputArea>
            <TextInput
              value={myMessageInput}
              onChangeText={(e) => setMyMessageInput(e)}
              placeholder='Sua mensagem ...'
              multiline={true}
              //textAlignVertical={'top'}
              autoCorrect={false}
            />
          </InputArea>
          <IconArea onPress={handleSend}>
            <Feather name='send' color={'#fff'} size={25} />
          </IconArea>
        </ViewInputContainer>
      </KeyboardAvoidingView>
    </Container>
  );
}
