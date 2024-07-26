import styled from '@emotion/styled';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { ChildRef } from '../../pages/form';

type CheckboxInputProps = {
  id: string;
  width: number;
  height: number;
  title: string;
};

const TextInput = forwardRef<ChildRef, CheckboxInputProps>(
  ({ id, width, height, title }, ref) => {
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
        <StyledLabel htmlFor={id}>{title}</StyledLabel>
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
