/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { InputLabel } from './InputLabel';
import { css } from '@emotion/react';

type ImageInputProps = {
  id: string;
  width: number;
  title: string;
};

const ImageInput = forwardRef(({ id, width, title }: ImageInputProps, ref) => {
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
    <Container width={width}>
      <InputLabel id={id} title={title} />
      <StyledInput
        id={id}
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleChange}
      />
      <img
        src={curImg}
        onClick={() => inputRef.current?.click()}
        width={150}
        height={150}
        css={css`
          cursor: pointer;
        `}
      ></img>
    </Container>
  );
});

const Container = styled.div<{ width: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ width }) => `${width}px`};
  height: auto;
`;

const StyledInput = styled.input`
  //TODO: 스크린리더 고려
  display: none;
`;

export default ImageInput;
