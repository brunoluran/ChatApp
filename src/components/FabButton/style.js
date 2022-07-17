import styled from "styled-components/native";

export const PressableFabButton = styled.Pressable`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.color.primary};
  justify-content: center;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 5%;
  right: 5%;
`;
