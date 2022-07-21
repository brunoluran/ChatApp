import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const FlatList = styled.FlatList`
  width: 100%;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  width: 100%;
`;

export const ViewInputContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin: 10px;
`;

export const InputArea = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #ededed;
  flex: 1;
  border-radius: 24px;
  margin-right: 10px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  padding: 5px 15px;
  max-height: 130px;
  min-height: 48px;
`;

export const IconArea = styled.Pressable`
  background-color: ${(props) => props.theme.color.primary};
  height: 48px;
  width: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
`;
