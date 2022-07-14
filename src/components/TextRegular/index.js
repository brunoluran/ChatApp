import { Text } from './style';

export default function TextRegular({ children, color, size, margin, onPress }) {
  return (
    <Text color={color} size={size} margin={margin} onPress={onPress}>
      {children}
    </Text>
  );
}
