import React from 'react';
import CommonTitle from '@/components/Typography/Title';
import ChatBubble from '@/components/ChatBubble';
import styled from '@emotion/styled';
import { ChatBubbleEdgeType } from '@/constants/components';

function ChatRoom() {
  return (
    <StyledChatRoom>
      <CommonTitle>채팅방 화면</CommonTitle>
      <ChatRoomRow>
        <ChatBubble>ㅇ아아아아아아아아아아</ChatBubble>
      </ChatRoomRow>
      <ChatRoomRow>
        <ChatBubble edgeLocation={ChatBubbleEdgeType.RIGHT}>어쩌구저쩌구</ChatBubble>
      </ChatRoomRow>
    </StyledChatRoom>
  );
}

const StyledChatRoom = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  height: 100vh;
`;

const ChatRoomRow = styled.div`
  display: block;
`;

export default ChatRoom;
