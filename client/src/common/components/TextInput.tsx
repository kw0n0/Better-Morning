import styled from '@emotion/styled';
import React, { useState } from 'react';

type TextInputProps = {
  width: number;
  height: number;
  placeholder?: string;
};

const TextInput: React.FC<TextInputProps> = React.memo(
  ({ width, height, placeholder, ...props }) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    return (
      <StyledInput
        type="text"
        width={width}
        height={height}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        {...props}
      />
    );
  }
);

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
