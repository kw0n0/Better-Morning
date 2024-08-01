import styled from '@emotion/styled';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { ChildRef } from '../../pages/form';

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
        <StyledLabel htmlFor={id}>{title}</StyledLabel>
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

const StyledLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
`;

const StyledInput = styled.input<{ width: number; height: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: 10px;
`;

export default TimeInput;
