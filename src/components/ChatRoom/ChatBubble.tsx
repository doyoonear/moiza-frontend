import React, { PropsWithChildren, ReactNode } from 'react';
import styled from '@emotion/styled';
import ChatEdgeLeftSvg from '@/assets/chatedge-left.svg';
import ChatEdgeRightSvg from '@/assets/chatedge-right.svg';
import { ChatBubbleEdgeType } from '@/constants/components';

const ChatBubble = ({
  children,
  edgeLocation = ChatBubbleEdgeType.LEFT,
}: {
  children: ReactNode;
  edgeLocation?: keyof typeof ChatBubbleEdgeType;
}): JSX.Element => {
  return (
    <StyledChatBubble>
      <ChatContent>{children}</ChatContent>
      {edgeLocation === ChatBubbleEdgeType.LEFT && (
        <ChatBubbleLeft>
          <ChatEdgeLeftSvg />
        </ChatBubbleLeft>
      )}
      {edgeLocation === ChatBubbleEdgeType.RIGHT && (
        <ChatBubbleRight>
          <ChatEdgeRightSvg />
        </ChatBubbleRight>
      )}
    </StyledChatBubble>
  );
};

const StyledChatBubble = styled.div`
  display: inline-flex;
  position: relative;
  padding: 1.5rem;
`;

const ChatContent = styled.p`
  display: flex;
  font-size: ${({ theme }) => theme.font.size16};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0.6rem;
  padding: ${({ theme }) => theme.gutter.size8};
`;

const ChatBubbleLeft = styled.div`
  position: absolute;
  top: 2.8rem;
  left: 0;
`;

const ChatBubbleRight = styled.div`
  position: absolute;
  top: 2.8rem;
  right: 0;
`;

export default ChatBubble;
