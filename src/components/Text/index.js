import { TextComponent } from './style';

export default function Text({ children, color, size, margin, onPress, numberOfLines, bold }) {
  return (
    <TextComponent
      color={color}
      size={size}
      margin={margin}
      onPress={onPress}
      numberOfLines={numberOfLines}
      bold={bold}
    >
      {children}
    </TextComponent>
  );
}
