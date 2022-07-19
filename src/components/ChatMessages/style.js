import styled from "styled-components/native";

export const Container = styled.View`
  padding: 20px;
`;
export const MessageBox = styled.View`
  padding: 10px;
  background-color: ${(props) => (props.isMyMessage ? "#dcf8c5" : "#ececec")};
  border-radius: 8px;
  margin-left: ${(props) => (props.isMyMessage ? "10%" : "0")};
  margin-right: ${(props) => (props.isMyMessage ? "0" : "10%")};
`;
