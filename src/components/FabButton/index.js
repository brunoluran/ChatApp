import { PressableFabButton } from './style';
import { useTheme } from 'styled-components';

import TextBold from '../TextBold';

export default function FabButton({ onPress }) {
  const theme = useTheme();
  return (
    <PressableFabButton onPress={onPress}>
      <TextBold size={28} color={theme.color.white} margin={'0'}>
        +
      </TextBold>
    </PressableFabButton>
  );
}
