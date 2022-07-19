import { PressableFabButton } from './style';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import Text from '../Text';

export default function FabButton({ onPress, userStatus }) {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleCiick() {
    userStatus ? onPress() : navigation.navigate('Register');
  }
  return (
    <PressableFabButton onPress={handleCiick}>
      <Text size={28} color={theme.color.white} margin={'0'}>
        +
      </Text>
    </PressableFabButton>
  );
}
