import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 5px 10px;
`;
export const MessageBox = styled.View`
  padding: 5px 10px;
  background-color: ${(props) => (props.isMyMessage ? '#000' : '#ececec')};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: ${(props) => (props.isMyMessage ? '8px' : '0')};
  border-bottom-right-radius: ${(props) => (props.isMyMessage ? '0' : '8px')};
  margin-left: ${(props) => (props.isMyMessage ? '10%' : '0')};
  margin-right: ${(props) => (props.isMyMessage ? '0' : '10%')};
`;
