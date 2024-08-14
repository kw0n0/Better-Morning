import styled from '@emotion/styled';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { InputLabel } from './InputLabel';

type RangeInputProps = {
  id: string;
  width: number;
  height: number;
  title: string;
  defaultValue?: string;
};

const RangeInput = forwardRef(
  ({ id, width, height, title, defaultValue }: RangeInputProps, ref) => {
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
        <InputLabel id={id} title={title} />
        <StyledInput
          id={id}
          type="range"
          width={width}
          height={height}
          min="0"
          max="10"
          defaultValue={defaultValue || '5'}
          ref={inputRef}
        ></StyledInput>
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
`;

export default RangeInput;
