import React from 'react';
import CommonTitle from '@/components/Typography/Title';
import ChatBubble from '@/components/ChatBubble';
import styled from '@emotion/styled';

function ChatRoom() {
  return (
    <StyledChatRoom>
      <CommonTitle>채팅방 화면</CommonTitle>
      <ChatBubble>ㅇ아아아아아아아아아아</ChatBubble>
    </StyledChatRoom>
  );
}

const StyledChatRoom = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
`;

export default ChatRoom;
