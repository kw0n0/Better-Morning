import styled from '@emotion/styled';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { InputLabel } from './InputLabel';

type TextInputProps = {
  id: string;
  width: number;
  height: number;
  placeholder?: string;
  title: string;
};

const TextInput = forwardRef(
  ({ id, width, height, placeholder, title }: TextInputProps, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      getValue: () => {
        if (inputRef.current) {
          return { id, value: inputRef.current.value };
        }

        return { id: null, value: null };
      },
    }));

    return (
      <Container>
        <InputLabel id={id} title={title} />
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

const StyledInput = styled.input<{ width: number; height: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px;

  &:focus {
    border: 1px solid purple;
    outline: none;
  }
`;

export default TextInput;
