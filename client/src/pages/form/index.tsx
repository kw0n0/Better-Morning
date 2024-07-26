/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TextInput from '../../common/components/TextInput';
import TimeInput from '../../common/components/TimeInput';
import RangeInput from '../../common/components/RangeInput';
import CheckboxInput from '../../common/components/CheckboxInput';

function Form() {
  const SERVER_DATA = [
    { id: 0, type: 'text', title: '취침 30분전 행동?' },
    { id: 1, type: 'time', title: '취침 시간', defaultValue: '23:00' },
    { id: 2, type: 'time', title: '기상 시간', defaultValue: '06:00' },
    { id: 3, type: 'text', title: '컨디션 기록 및 시도한 작은 습관' },
    { id: 4, type: 'range', title: '컨디션 점수', defaultValue: '5' },
    { id: 5, type: 'checkbox', title: '목표 달성여부' },
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

        if (item.type === 'range') {
          return (
            <RangeInput
              key={item.id}
              id={`${item.id}`}
              width={400}
              height={30}
              title={item.title}
              defaultValue={item.defaultValue}
            />
          );
        }

        if (item.type === 'checkbox') {
          return (
            <CheckboxInput
              key={item.id}
              id={`${item.id}`}
              width={400}
              height={30}
              title={item.title}
            />
          );
        }
      })}
    </form>
  );
}

export default Form;
