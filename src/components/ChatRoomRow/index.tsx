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

const ChatRoomRow = ({ children, imgAlt, imgSrc, isMyChat }: PropsWithChildren<ChatRoomRowProps>) => {
  return (
    <StyledChatRoomRow>
      {isMyChat && <ChatBubble edgeLocation={ChatBubbleEdgeType.RIGHT}>{children}</ChatBubble>}
      {!isMyChat && (
        <>
          <ChatProfileImg alt={imgAlt} src={imgSrc} />
          <ChatBubble>{children}</ChatBubble>
        </>
      )}
    </StyledChatRoomRow>
  );
};

const StyledChatRoomRow = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.gutter.size16};

  > img {
    margin-right: ${({ theme }) => theme.gutter.size8};
  }
`;

export default ChatRoomRow;
