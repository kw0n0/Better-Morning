/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TextInput from '../../common/components/TextInput';
import TimeInput from '../../common/components/TimeInput';

function Form() {
  const SERVER_DATA = [
    { id: 0, type: 'text', title: '취침 30분전 행동?' },
    { id: 1, type: 'time', title: '취침 시간', defaultValue: '23:00' },
    { id: 2, type: 'time', title: '기상 시간', defaultValue: '06:00' },
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
              id={`${item.id}`}
              width={400}
              height={30}
              placeholder={'텍스트를 입력해주세요'}
              title={item.title}
            />
          );
        }

        if (item.type === 'time') {
          return (
            <TimeInput
              key={item.id}
              id={`${item.id}`}
              width={400}
              height={30}
              title={item.title}
              defaultValue={item.defaultValue}
            />
          );
        }
      })}
    </form>
  );
}

export default Form;
