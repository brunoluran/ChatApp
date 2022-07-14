import { TextInput } from './style';

export default function Input({
  value,
  onChangeText,
  keyboardType,
  style,
  onBlur,
  editable,
  autoCapitalize,
  onFocus,
  ref,
  error,
  secureTextEntry,
  placeholder,
}) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      style={style}
      onBlur={onBlur}
      editable={editable}
      autoCapitalize={autoCapitalize}
      onFocus={onFocus}
      ref={ref}
      error={error}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
    />
  );
}
