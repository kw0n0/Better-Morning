import styled from '@emotion/styled';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { ChildRef } from '../../pages/form';
import { InputLabel } from './InputLabel';

type TimeInputProps = {
  id: string;
  width: number;
  height: number;
  title: string;
  defaultValue?: string;
};

const TimeInput = forwardRef<ChildRef, TimeInputProps>(
  ({ id, width, height, title, defaultValue }, ref) => {
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
          type="time"
          width={width}
          height={height}
          defaultValue={defaultValue || '00:00'}
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
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px;
`;

export default TimeInput;
