/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { InputHTMLAttributes } from 'react';
import { FiXCircle } from 'react-icons/fi';
import {
  Container, InputBase, Message, MessageContainer,
} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: string;
  description?: string;
  register: any;
  className?: string;
}

export function Input({
  name,
  error,
  register,
  description,
  ...rest
}:InputProps) {
  return (
    <Container>
      <InputBase
        id={name}
        name={name}
        error={!!error}
        {...rest}
        {...register(name)}
      />
      {!!error && (
      <MessageContainer>
        <Message error={!!error}>
          {error}
        </Message>
        <FiXCircle />
      </MessageContainer>
      )}
      {!error && (
      <MessageContainer>
        <Message error={!!error}>
          {description}
        </Message>
      </MessageContainer>
      )}
    </Container>
  );
}
