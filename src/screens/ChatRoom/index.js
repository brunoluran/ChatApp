import { Container, Header, LeftHeader, PressableIcon, Modal, FlatList } from './style';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { StatusBar, ActivityIndicator, Alert } from 'react-native';
import { useTheme } from 'styled-components';
import { useState, useEffect } from 'react';
import Octicons from '@expo/vector-icons/Octicons';
import firebase from '../../firebase';

import Text from '../../components/Text';
import FabButton from '../../components/FabButton';
import ModalCreateGroup from '../../components/ModalCreateGroup';
import ChatList from '../../components/ChatList';

export default function ChatRoom() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const theme = useTheme();

  const [modal, setModal] = useState(false);
  const [updateScreen, setUpdateScreen] = useState(false);
  const [user, setUser] = useState(null);
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasUser = firebase.auth().currentUser ? firebase.auth().currentUser.toJSON() : null;
    //console.log(hasUser);
    setUser(hasUser);
  }, [isFocused]);

  useEffect(() => {
    let isActive = true;
    function getChats() {
      firebase
        .firestore()
        .collection('MESSAGE_THREADS')
        .orderBy('lastMessage.createdAt', 'desc')
        .limit(10)
        .get()
        .then((snapshot) => {
          const threads = snapshot.docs.map((documentSnapshot) => {
            return {
              _id: documentSnapshot.id,
              name: '',
              lastMessage: { text: '' },
              ...documentSnapshot.data(),
            };
          });
          if (isActive) {
            setThreads(threads);
            setLoading(false);
            //console.log(threads);
          }
        });
    }
    getChats();
    return () => {
      isActive = false;
    };
  }, [isFocused, updateScreen]);

  function signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        navigation.navigate('Register');
      })
      .catch(() => {
        alert('Deu ruim');
      });
  }

  function handleDeleteRoom(ownerId, idRoom) {
    if (ownerId !== user?.uid) return;
    Alert.alert('Atenção!', 'Você tem certeza que deseja deletar essa sala?', [
      {
        text: 'Cancelar',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Deletar',
        onPress: () => deleteRoom(idRoom),
      },
    ]);
  }

  async function deleteRoom(idRoom) {
    await firebase.firestore().collection('MESSAGE_THREADS').doc(idRoom).delete();
    setUpdateScreen(!updateScreen);
  }

  if (loading) {
    {
      return (
        <ActivityIndicator
          size='large'
          color='#2e54d4'
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        />
      );
    }
  }
  return (
    <Container>
      <StatusBar backgroundColor={'#2e54d4'} barStyle='light-content' />
      <Header>
        <LeftHeader>
          {user && (
            <PressableIcon>
              <Octicons
                name='arrow-left'
                size={30}
                color={theme.color.white}
                onPress={() => signOut()}
              />
            </PressableIcon>
          )}

          <Text bold size={26} color={theme.color.white} margin={'0'}>
            Grupos
          </Text>
        </LeftHeader>

        <PressableIcon>
          <Octicons name='search' size={30} color={theme.color.white} />
        </PressableIcon>
      </Header>
      <FlatList
        data={threads}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <ChatList
            data={item}
            onLongPress={() => handleDeleteRoom(item.owner, item._id)}
            userStatus={user}
          />
        )}
      />
      <FabButton onPress={() => setModal(true)} userStatus={user} />
      <Modal visible={modal} animationType='fade' transparent={true}>
        <ModalCreateGroup
          onPressExit={() => setModal(false)}
          setUpdateScreen={() => setUpdateScreen(!updateScreen)}
        />
      </Modal>
    </Container>
  );
}
