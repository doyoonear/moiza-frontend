import React from 'react';
import CommonTitle from '@/components/Typography/Title';
import ChatRoomRow from '@/components/ChatRoomRow';
import styled from '@emotion/styled';

function ChatRoom() {
  return (
    <StyledChatRoom>
      <CommonTitle>채팅방 화면</CommonTitle>
      <ChatRoomRow imgSrc="https://cdn.pixabay.com/photo/2022/01/29/06/07/couple-6976409_1280.jpg" isMyChat={false}>
        안녕하세요~~
      </ChatRoomRow>
      <ChatRoomRow imgSrc="https://cdn.pixabay.com/photo/2022/01/29/06/07/couple-6976409_1280.jpg" isMyChat={true}>
        아아앋가ㅓ다거
      </ChatRoomRow>
    </StyledChatRoom>
  );
}

const StyledChatRoom = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  height: 100vh;
`;

export default ChatRoom;
