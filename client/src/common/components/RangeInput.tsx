import styled from '@emotion/styled';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { ChildRef } from '../../pages/form';

type RangeInputProps = {
  id: string;
  width: number;
  height: number;
  title: string;
  defaultValue?: string;
};

const RangeInput = forwardRef<ChildRef, RangeInputProps>(
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

const StyledLabel = styled.label`
  padding: 10px 10px 10px 0;
  font-size: 20px;
  font-weight: bold;
`;

const StyledInput = styled.input<{ width: number; height: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  padding: 0 10px 0 10px;
`;

export default RangeInput;
