import { Container, Header, LeftHeader, PressableIcon, Modal } from "./style";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { useState } from "react";
import Octicons from "@expo/vector-icons/Octicons";
import firebase from "../../firebase";

import TextBold from "../../components/TextBold";
import FabButton from "../../components/FabButton";
import ModalCreateGroup from "../../components/ModalCreateGroup";

export default function ChatRoom() {
  const navigation = useNavigation();
  const theme = useTheme();

  const [modal, setModal] = useState(false);

  function signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate("Register");
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
          <PressableIcon>
            <Octicons
              name="arrow-left"
              size={30}
              color={theme.color.white}
              onPress={() => signOut()}
            />
          </PressableIcon>
          <TextBold size={26} color={theme.color.white} margin={"0"}>
            Grupos
          </TextBold>
        </LeftHeader>
        <PressableIcon>
          <Octicons name="search" size={30} color={theme.color.white} />
        </PressableIcon>
      </Header>
      <FabButton onPress={() => setModal(true)} />
      <Modal visible={modal} animationType="fade" transparent={true}>
        <ModalCreateGroup onPressExit={() => setModal(false)} onPress={() => alert("Hello")} />
      </Modal>
    </Container>
  );
}
