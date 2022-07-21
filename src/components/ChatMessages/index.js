import { Container, MessageBox } from './style';
import { useMemo } from 'react';
import firebase from '../../firebase';

import Text from '../Text';

export default function ChatMessages({ data }) {
  const user = firebase.auth().currentUser.toJSON();

  const isMyMessage = useMemo(() => {
    return data?.user?._id === user.uid;
  }, [data]);

  return (
    <Container>
      <MessageBox isMyMessage={isMyMessage}>
        {!isMyMessage && (
          <Text bold color={'#f53745'} margin={'0px'}>
            {data?.user?.displayName}
          </Text>
        )}
        <Text margin={isMyMessage ? '0' : '5px'} color={isMyMessage ? '#fff' : '#000'}>
          {data.text}
        </Text>
      </MessageBox>
    </Container>
  );
}
