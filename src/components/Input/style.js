import styled from 'styled-components/native';

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#aaa',
})`
  width: 100%;
  height: 45px;
  background-color: ${(props) => props.theme.color.gray};
  border: ${(props) => (props.error ? `#f00` : props.theme.color.gray)};
  border-radius: 8px;
  margin-top: 15px;
  align-items: center;
  padding-left: 10px;
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;
  color: ${(props) => props.theme.color.black};
`;
