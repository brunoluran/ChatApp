import { Container, MessageBox } from "./style";
import { useMemo } from "react";
import firebase from "../../firebase";

import Text from "../Text";

export default function ChatMessages({ data }) {
  const user = firebase.auth().currentUser.toJSON();

  const isMyMessage = useMemo(() => {
    return data?.user?._id === user.uid;
  }, [data]);

  //   const isMyMessage = true;
  return (
    <Container>
      <MessageBox isMyMessage={isMyMessage}>
        {!isMyMessage && (
          <Text bold color={"#f53745"} margin={"0px"}>
            {data?.user?.displeyName}
          </Text>
        )}

        <Text margin={"5px"}>{data.text}</Text>
      </MessageBox>
    </Container>
  );
}
