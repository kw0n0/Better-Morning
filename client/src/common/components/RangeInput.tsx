import styled from '@emotion/styled';
import React, { useState } from 'react';

type RangeInputProps = {
  id: string;
  width: number;
  height: number;
  title: string;
  defaultValue?: string;
};

const RangeInput: React.FC<RangeInputProps> = ({
  id,
  width,
  height,
  title,
  defaultValue,
}) => {
  const [value, setValue] = useState<string>(defaultValue || '5');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

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
        onChange={handleChange}
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
  padding: 0 10px 0 10px;
`;

export default RangeInput;
