import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

const ChatBubble = ({ children }: { children: string }): JSX.Element => {
  return (
    <StyledChatBubble>
      <ChatContent>{children}</ChatContent>
      <ChatBubbleEdge></ChatBubbleEdge>
    </StyledChatBubble>
  );
};

const StyledChatBubble = styled.div`
  display: flex;
`;

const ChatContent = styled.p`
  font-size: ${({ theme }) => theme.font.size16};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0.6rem;
`;

const ChatBubbleEdge = styled.div`
  background-color: ${({ theme }) => theme.color.white};
`;

export default ChatBubble;
