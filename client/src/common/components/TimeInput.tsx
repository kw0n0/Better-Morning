import styled from '@emotion/styled';
import React from 'react';

type TimeInputProps = {
  id: string;
  width: number;
  height: number;
  title: string;
  defaultValue?: string;
};

const TimeInput: React.FC<TimeInputProps> = ({
  id,
  width,
  height,
  title,
  defaultValue,
}) => {
  return (
    <Container>
      <StyledLabel htmlFor={id}>{title}</StyledLabel>
      <StyledInput
        id={id}
        type="time"
        width={width}
        height={height}
        defaultValue={defaultValue || '00:00'}
      ></StyledInput>
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
`;

export default TimeInput;
