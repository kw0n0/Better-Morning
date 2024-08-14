import styled from '@emotion/styled';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { InputLabel } from './InputLabel';

type CheckboxInputProps = {
  id: string;
  width: number;
  height: number;
  title: string;
};

const TextInput = forwardRef(
  ({ id, width, height, title }: CheckboxInputProps, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      getValue: () => {
        if (inputRef.current) {
          return { id, value: inputRef.current.checked };
        }

        //TODO: 어떻게 대응하면 좋을지 공통적으로 체크
        return { id: ' ', value: false };
      },
    }));

    return (
      <Container>
        <InputLabel id={id} title={title} />
        <StyledInput
          id={id}
          type="checkbox"
          width={width}
          height={height}
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

  &:focus {
    border: 2px solid purple;
    outline: none;
  }
`;

export default TextInput;
