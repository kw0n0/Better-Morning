/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TextInput from '../../common/components/TextInput';

function Form() {
  const SERVER_DATA = [
    { id: 0, type: 'text', placeholder: '텍스트를 입력해주세요' },
    { id: 1, type: 'text', placeholder: '텍스트를 입력해주세요2' },
  ];

  return (
    <form
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      {SERVER_DATA.map((item) => {
        if (item.type === 'text') {
          return (
            <TextInput
              key={item.id}
              width={400}
              height={30}
              placeholder={item.placeholder}
            />
          );
        }
      })}
    </form>
  );
}

export default Form;
