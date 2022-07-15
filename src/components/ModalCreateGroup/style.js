import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.4);
`;

export const ModalItem = styled.View`
  height: 40%;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  align-items: center;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const HorizontalBar = styled.View`
  width: 20%;
  border-radius: 8px;
  height: 5px;
  background-color: ${(props) => props.theme.color.gray};
`;

export const PressableIcon = styled.Pressable`
  width: 100%;
  height: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
