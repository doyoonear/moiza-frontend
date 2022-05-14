import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { ChatBubbleEdgeType } from '@/constants/components';
import ChatProfileImg from '@/components/ChatProfileImg';
import ChatBubble from '@/components/ChatBubble';

interface ChatRoomRowProps {
  imgAlt?: string;
  imgSrc?: string;
  isMyChat: boolean;
}

const ChatRoomRow = ({ children, imgSrc, isMyChat }: PropsWithChildren<ChatRoomRowProps>) => {
  return (
    <StyledChatRoomRow isMyChat={isMyChat}>
      {isMyChat && <ChatBubble edgeLocation={ChatBubbleEdgeType.RIGHT}>{children}</ChatBubble>}
      {!isMyChat && (
        <>
          <ChatProfileImg alt="profile-img" src={imgSrc} />
          <ChatBubble>{children}</ChatBubble>
        </>
      )}
    </StyledChatRoomRow>
  );
};

const StyledChatRoomRow = styled.div<{ isMyChat: boolean }>`
  display: flex;
  padding: ${({ theme }) => theme.gutter.size16};
  ${({ isMyChat }) => isMyChat && 'justify-content: flex-end'};

  > img {
    margin-right: ${({ theme }) => theme.gutter.size8};
  }
`;

export default ChatRoomRow;
