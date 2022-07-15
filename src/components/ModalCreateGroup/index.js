import { Container, ModalItem, HorizontalBar, PressableIcon } from './style';

import TextBold from '../TextBold';
import Input from '../Input';
import Pressable from '../Pressable';

export default function ModalCreateGroup({ onPress, onPressExit }) {
  return (
    <Container>
      <ModalItem>
        <PressableIcon onPress={onPressExit}>
          <HorizontalBar />
        </PressableIcon>
        <TextBold size={22} margin={'10px'}>
          Criar um novo grupo?
        </TextBold>
        <Input />
        <Pressable text={'Criar grupo'} onPress={onPress} />
      </ModalItem>
    </Container>
  );
}
