import styled from '@emotion/styled';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { ChildRef } from '../../pages/form';

type TextInputProps = {
  id: string;
  width: number;
  height: number;
  placeholder?: string;
  title: string;
};

const TextInput = forwardRef<ChildRef, TextInputProps>(
  ({ id, width, height, placeholder, title }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      getValue: () => {
        if (inputRef.current) {
          return { id, value: inputRef.current.value };
        }

        return { id: ' ', value: '' };
      },
    }));

    return (
      <Container>
        <StyledLabel htmlFor={id}>{title}</StyledLabel>
        <StyledInput
          id={id}
          type="text"
          width={width}
          height={height}
          placeholder={placeholder}
          ref={inputRef}
        />
      </Container>
    );
  }
);
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
`;

const StyledInput = styled.input<{ width: number; height: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: 10px;

  &:focus {
    border: 2px solid purple;
    outline: none;
  }
`;

export default TextInput;
