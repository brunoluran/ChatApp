import { Container, PressableView, ModalContent, HorizontalBar, PressableIcon } from './style';
import { useState } from 'react';
import firebase from '../../firebase';

import TextBold from '../TextBold';
import Input from '../Input';
import Pressable from '../Pressable';

export default function ModalCreateGroup({ onPress, onPressExit }) {
  const [newRoom, setNewRoom] = useState('');

  const user = firebase.auth().currentUser.toJSON();
  console.log(user);

  function handleCreate() {
    if (newRoom === '') return;
    firebase
      .firestore()
      .collection('MESSAGE_THREADS')
      .add({
        name: newRoom,
        owner: user.uid,
        lastMessage: {
          text: `Grupo ${newRoom} criado. Bem-vindo(a)`,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        },
      })
      .then((docRef) => {
        docRef
          .collection('MESSAGES')
          .add({
            text: `Grupo ${newRoom} criado. Bem-vindo(a)`,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            system: true,
          })
          .then(() => {
            onPressExit();
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
          <TextBold size={22} margin={'10px'}>
            Criar um novo grupo?
          </TextBold>
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
