import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: ${(props) => (props.size ? `${props.size}` : '16')}px;
  color: ${(props) => (props.color ? `${props.color}` : props.theme.color.black)};
  font-family: ${(props) => props.theme.fonts.bold};
  margin-top: ${(props) => (props.margin ? `${props.margin}` : '10px')};
`;
