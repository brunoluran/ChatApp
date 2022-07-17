import { PressableFabButton } from './style';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import TextBold from '../TextBold';

export default function FabButton({ onPress, userStatus }) {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleCiick() {
    userStatus ? onPress() : navigation.navigate('Register');
  }
  return (
    <PressableFabButton onPress={handleCiick}>
      <TextBold size={28} color={theme.color.white} margin={'0'}>
        +
      </TextBold>
    </PressableFabButton>
  );
}
