import styled from 'styled-components/native';

export const PressableButton = styled.Pressable`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  background-color: ${(props) => (props.bgColor ? `${props.bgColor}` : props.theme.color.primary)};
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.margin ? `${props.margin}` : '15px')};
`;

export const PressableText = styled.Text`
  font-size: 18px;
  color: ${(props) => (props.color ? `${props.color}` : props.theme.color.white)};
  font-family: ${(props) => props.theme.fonts.bold};
`;
