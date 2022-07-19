import { PressableView, Title } from './style';
import { useNavigation } from '@react-navigation/native';

import Text from '../Text';

export default function ChatList({ data, onLongPress, userStatus }) {
  const navigation = useNavigation();

  function openChat() {
    if (userStatus) {
      navigation.navigate('Messages', { thread: data });
    } else {
      navigation.navigate('Register');
    }
  }
  return (
    <PressableView onPress={() => openChat()} onLongPress={onLongPress}>
      <Title>
        <Text bold margin={'0'} numberOfLines={1}>
          {data.name}
        </Text>
      </Title>
      <Text margin={'5px'} numberOfLines={1} color={'#888'}>
        {data.lastMessage.text}
      </Text>
    </PressableView>
  );
}
