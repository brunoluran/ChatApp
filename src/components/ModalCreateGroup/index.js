import { Container, PressableView, ModalContent, HorizontalBar, PressableIcon } from './style';
import { useState } from 'react';
import firebase from '../../firebase';

import Text from '../Text';
import Input from '../Input';
import Pressable from '../Pressable';

export default function ModalCreateGroup({ onPress, onPressExit, setUpdateScreen }) {
  const [newRoom, setNewRoom] = useState('');

  const user = firebase.auth().currentUser.toJSON();
  console.log(user);

  function handleCreate() {
    if (newRoom === '') return;

    firebase
      .firestore()
      .collection('MESSAGE_THREADS')
      .get()
      .then((snapshot) => {
        let myThreads = 0;

        snapshot.docs.map((item) => {
          if (item.data().owner === user.uid) {
            myThreads += 1;
          }
        });

        if (myThreads >= 4) {
          alert('Você atingiu o limite de salar por usuario.');
        } else {
          createRoom();
        }
      });
  }

  function createRoom() {
    firebase
      .firestore()
      .collection('MESSAGE_THREADS')
      .add({
        name: newRoom,
        owner: user.uid,
        lastMessage: {
          text: `Grupo ${newRoom} criado. `,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        },
      })
      .then((docRef) => {
        docRef
          .collection('MESSAGES')
          .add({
            text: `Grupo ${newRoom} criado. `,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            system: true,
          })
          .then(() => {
            onPressExit();
            setUpdateScreen();
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <Container>
      <PressableView onPress={onPressExit}>
        <ModalContent>
          <PressableIcon onPress={onPressExit}>
            <HorizontalBar />
          </PressableIcon>
          <Text bold size={22} margin={'10px'}>
            Criar um novo grupo?
          </Text>
          <Input
            value={newRoom}
            onChangeText={(e) => setNewRoom(e)}
            placeholder='Nome da sala'
            autoCapitalize='words'
            keyboardType='default'
          />
          <Pressable text={'Criar grupo'} onPress={handleCreate} />
        </ModalContent>
      </PressableView>
    </Container>
  );
}
