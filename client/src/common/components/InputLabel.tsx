import styled from '@emotion/styled';

type InputLabelProps = {
  id: string;
  title: string;
};

export const InputLabel = ({ id, title }: InputLabelProps) => {
  return <StyledLabel htmlFor={id}>{title}</StyledLabel>;
};

const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
`;
