import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

type InputBaseProps = {
  error: boolean;
}

export const InputBase = styled.input<InputBaseProps>`
  border: none;
  width: 100%;
  padding: ${({ theme }) => theme.space['spacing-08']} 0px;
  border-bottom: 1.61px solid ${({ theme }) => theme.colors['grayScale-01']};

  &:focus {
    border-bottom: 1.61px solid ${({ theme }) => theme.colors['info-02']};
    ${({ error }) => error && css`
    border-color: ${({ theme }) => theme.colors['error-02']};
  `}
  }

  ${({ error }) => error && css`
    border-color: ${({ theme }) => theme.colors['error-02']};
  `}

`;

type MessageProps = {
  error: boolean;
}

export const Message = styled.span<MessageProps>`
  font-size: ${({ theme }) => theme.fontSizes['caption-01']};
  line-height: ${({ theme }) => theme.lineHeights['caption-01']};
  align-self: start;

  ${({ error }) => error && css`
    color: ${({ theme }) => theme.colors['error-02']};
  `}
`;

export const MessageContainer = styled.div`
  margin-top: ${({ theme }) => theme.space['spacing-08']};
  justify-content: space-between;
  align-items: center;
  display: flex;

  svg {
    font-size: ${({ theme }) => theme.fontSizes['caption-01']};
    line-height: ${({ theme }) => theme.lineHeights['caption-01']};
    align-self: start;
    color: ${({ theme }) => theme.colors['error-02']};
  }
`;
