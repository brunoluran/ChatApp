<<<<<<< HEAD
import { Container, Header, LeftHeader, PressableIcon, Modal } from './style';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useState, useEffect } from 'react';
=======
import { Container, Header, LeftHeader, PressableIcon, Modal } from "./style";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { useState } from "react";
import Octicons from "@expo/vector-icons/Octicons";
import firebase from "../../firebase";
>>>>>>> 4df8a9fc0cec852e16a67a4602d54ff54c5894ad

import TextBold from "../../components/TextBold";
import FabButton from "../../components/FabButton";
import ModalCreateGroup from "../../components/ModalCreateGroup";

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
<<<<<<< HEAD
        setUser(null);
        navigation.navigate('Register');
=======
        navigation.navigate("Register");
>>>>>>> 4df8a9fc0cec852e16a67a4602d54ff54c5894ad
      })
      .catch(() => {
        alert("Deu ruim");
      });
  }
  return (
    <Container>
      <StatusBar backgroundColor={"#2e54d4"} barStyle="light-content" />
      <Header>
        <LeftHeader>
<<<<<<< HEAD
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
=======
          <PressableIcon>
            <Octicons
              name="arrow-left"
              size={30}
              color={theme.color.white}
              onPress={() => signOut()}
            />
          </PressableIcon>
          <TextBold size={26} color={theme.color.white} margin={"0"}>
>>>>>>> 4df8a9fc0cec852e16a67a4602d54ff54c5894ad
            Grupos
          </TextBold>
        </LeftHeader>
        <PressableIcon>
          <Octicons name="search" size={30} color={theme.color.white} />
        </PressableIcon>
      </Header>
<<<<<<< HEAD
      <FabButton onPress={() => setModal(true)} userStatus={user} />
      <Modal visible={modal} animationType='fade' transparent={true}>
        <ModalCreateGroup onPressExit={() => setModal(false)} />
=======
      <FabButton onPress={() => setModal(true)} />
      <Modal visible={modal} animationType="fade" transparent={true}>
        <ModalCreateGroup onPressExit={() => setModal(false)} onPress={() => alert("Hello")} />
>>>>>>> 4df8a9fc0cec852e16a67a4602d54ff54c5894ad
      </Modal>
    </Container>
  );
}
