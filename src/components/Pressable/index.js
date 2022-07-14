import { PressableButton, PressableText } from './style';

export default function Pressable({ text, color, bgColor, onPress, margin }) {
  return (
    <PressableButton bgColor={bgColor} onPress={onPress} margin={margin}>
      <PressableText color={color}>{text}</PressableText>
    </PressableButton>
  );
}
