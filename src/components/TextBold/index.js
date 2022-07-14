import { Text } from './style';

export default function TextBold({ children, color, size, margin, onPress }) {
  return (
    <Text color={color} size={size} margin={margin} onPress={onPress}>
      {children}
    </Text>
  );
}
