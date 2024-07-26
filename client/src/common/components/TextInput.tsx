import styled from '@emotion/styled';
import React, { useState } from 'react';

type TextInputProps = {
  id: string;
  width: number;
  height: number;
  placeholder?: string;
  title: string;
};

const TextInput: React.FC<TextInputProps> = ({
  id,
  width,
  height,
  placeholder,
  title,
  ...props
}) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Container>
      <StyledLabel htmlFor={id}>{title}</StyledLabel>
      <StyledInput
        id={id}
        type="text"
        width={width}
        height={height}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        {...props}
      />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  padding: 10px 10px 10px 0;
  font-size: 20px;
  font-weight: bold;
`;

const StyledInput = styled.input<{ width: number; height: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  padding: 10px;
  border-radius: 10px;

  &:focus {
    border: 2px solid purple;
    outline: none;
  }
`;

export default TextInput;
