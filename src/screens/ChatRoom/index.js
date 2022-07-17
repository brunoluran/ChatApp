import { Container, Header, LeftHeader, PressableIcon, Modal } from './style';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useState, useEffect } from 'react';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import firebase from '../../firebase';

import TextBold from '../../components/TextBold';
import FabButton from '../../components/FabButton';
import ModalCreateGroup from '../../components/ModalCreateGroup';

export default function ChatRoom() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const theme = useTheme();
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const hasUser = firebase.auth().currentUser ? firebase.auth().toJSON() : null;
    console.log(hasUser);
    setUser(hasUser);
  }, [isFocused]);

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
  return (
    <Container>
      <StatusBar backgroundColor={'#2e54d4'} barStyle='light-content' />
      <Header>
        <LeftHeader>
          {user && (
            <PressableIcon>
              <MaterialIcons
                name='arrow-back'
                size={30}
                color={theme.color.white}
                onPress={() => signOut()}
              />
            </PressableIcon>
          )}

          <TextBold size={26} color={theme.color.white} margin={'0'}>
            Grupos
          </TextBold>
        </LeftHeader>
        <PressableIcon>
          <MaterialIcons name='search' size={30} color={theme.color.white} />
        </PressableIcon>
      </Header>
      <FabButton onPress={() => setModal(true)} userStatus={user} />
      <Modal visible={modal} animationType='fade' transparent={true}>
        <ModalCreateGroup onPressExit={() => setModal(false)} />
      </Modal>
    </Container>
  );
}
