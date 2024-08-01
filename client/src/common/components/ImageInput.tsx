import styled from '@emotion/styled';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { ChildRef } from '../../pages/form';

type ImageInputProps = {
  id: string;
  width: number;
  height: number;
  title: string;
};

const ImageInput = forwardRef<ChildRef, ImageInputProps>(
  ({ id, width, height, title }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [curImg, setCurImg] = useState('http://via.placeholder.com/150x150');

    useImperativeHandle(ref, () => ({
      getValue: () => {
        if (inputRef.current) {
          return { id, value: curImg };
        }

        return { id: ' ', value: false };
      },
    }));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files || e.target.files.length <= 0) return;

      setCurImg(URL.createObjectURL(e.target.files[0]));
    };

    return (
      <Container>
        <StyledLabel htmlFor={id}>{title}</StyledLabel>

        <StyledInput
          id={id}
          type="file"
          accept="image/*"
          width={width}
          height={height}
          ref={inputRef}
          onChange={handleChange}
        />
        <img src={curImg} width={150} height={150}></img>
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
`;

export default ImageInput;
