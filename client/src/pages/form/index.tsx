/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TextInput from '../../common/components/TextInput';

function Form() {
  const SERVER_DATA = [{ id: 0, type: 'text', title: '취침 30분전 행동?' }];

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
              id={`${item.id}`}
              width={400}
              height={30}
              placeholder={'텍스트를 입력해주세요'}
              title={item.title}
            />
          );
        }
      })}
    </form>
  );
}

export default Form;
