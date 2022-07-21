import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const SearchArea = styled.View`
  margin-top: 25px;
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#aaa',
})`
  padding: 10px;
  width: 80%;
  border-radius: 8px;
  background: rgba(235, 235, 235, 0.7);
  margin-left: 10px;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;
  color: ${(props) => props.theme.color.black};
`;

export const SearchButton = styled.Pressable`
  margin-left: 0px;
  width: 15%;
  border-radius: 8px;
  background-color: #2e54d4;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  margin-right: 10px;
`;

export const FlatList = styled.FlatList``;
