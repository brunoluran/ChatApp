import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  width: 100%;
  height: 15%;
  padding: 0 10px;
  background-color: ${(props) => props.theme.color.primary};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const LeftHeader = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const PressableIcon = styled.Pressable`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.Modal``;
