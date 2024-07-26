import styled from '@emotion/styled';
import { useState } from 'react';

type CheckboxInputProps = {
  id: string;
  width: number;
  height: number;
  title: string;
};

const TextInput: React.FC<CheckboxInputProps> = ({
  id,
  width,
  height,
  title,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Container>
      <StyledLabel htmlFor={id}>{title}</StyledLabel>
      <StyledInput
        id={id}
        type="checkbox"
        width={width}
        height={height}
        checked={isChecked}
        onChange={handleChange}
        {...props}
      />
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

  &:focus {
    border: 2px solid purple;
    outline: none;
  }
`;

export default TextInput;
