/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRef } from 'react';
import TextInput from '../../common/components/TextInput';
import TimeInput from '../../common/components/TimeInput';
import RangeInput from '../../common/components/RangeInput';
import CheckboxInput from '../../common/components/CheckboxInput';
import ImageInput from '../../common/components/ImageInput';

type FormChildRef = {
  getValue: () => FormResult;
};

type FormResult = {
  id: string;
  value: string | boolean;
};

function Form() {
  const SERVER_DATA = [
    {
      id: 0,
      type: 'text',
      title: '취침 30분전 행동',
    },
    { id: 1, type: 'time', title: '기상 시간', defaultValue: '23:00' },
    { id: 2, type: 'time', title: '취침 시간', defaultValue: '06:00' },
    { id: 3, type: 'range', title: '컨디션 점수', defaultValue: '5' },
    { id: 4, type: 'text', title: '컨디션 상세' },
    // { id: 5, type: 'checkbox', title: '목표 달성여부' },
    { id: 6, type: 'image', title: '취침 전 인증사진' },
    { id: 7, type: 'image', title: '목표 인증사진' },
  ];

  const childRefs = useRef<FormChildRef[]>([]);

  const handleClick = () => {
    const values = new Array<FormResult>();
    childRefs.current.forEach((ref) => {
      values.push(ref.getValue());
    });

    console.log('테스트', values);
  };

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
      `}
    >
      <form
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
        `}
      >
        {SERVER_DATA.map((item) => {
          switch (item.type) {
            case 'text':
              return (
                <TextInput
                  key={item.id}
                  id={`${item.id}`}
                  width={320}
                  height={30}
                  placeholder={'텍스트를 입력해주세요'}
                  title={item.title}
                  ref={(ref: FormChildRef) =>
                    (childRefs.current[item.id] = ref)
                  }
                />
              );

            case 'time':
              return (
                <TimeInput
                  key={item.id}
                  id={`${item.id}`}
                  width={320}
                  height={30}
                  title={item.title}
                  defaultValue={item.defaultValue}
                  ref={(ref: FormChildRef) =>
                    (childRefs.current[item.id] = ref)
                  }
                />
              );

            case 'range':
              return (
                <RangeInput
                  key={item.id}
                  id={`${item.id}`}
                  width={320}
                  height={30}
                  title={item.title}
                  defaultValue={item.defaultValue}
                  ref={(ref: FormChildRef) =>
                    (childRefs.current[item.id] = ref)
                  }
                />
              );

            case 'checkbox':
              return (
                <CheckboxInput
                  key={item.id}
                  id={`${item.id}`}
                  width={320}
                  height={30}
                  title={item.title}
                  ref={(ref: FormChildRef) =>
                    (childRefs.current[item.id] = ref)
                  }
                />
              );

            case 'image':
              return (
                <ImageInput
                  key={item.id}
                  id={`${item.id}`}
                  width={320}
                  title={item.title}
                  ref={(ref: FormChildRef) =>
                    (childRefs.current[item.id] = ref)
                  }
                />
              );

            default:
              return <></>;
          }
        })}
      </form>

      <button
        css={css`
          width: 320px;
          height: 30px;
          margin-top: 50px;
        `}
        onClick={handleClick}
      >
        인증하기
      </button>
    </div>
  );
}

export default Form;
