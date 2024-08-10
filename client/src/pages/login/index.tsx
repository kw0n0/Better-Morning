import React, { useRef } from 'react';
import TextInput from '../../common/components/TextInput';
import Axios from '../../utils/axios';

type LoginReq = Record<'id' | 'password', string | null>;

type LoginChildRef = {
  getValue: () => {
    id: keyof LoginReq;
    value: LoginReq[keyof LoginReq];
  };
};

const Login: React.FC = () => {
  const childRefs = useRef<LoginChildRef[]>([]);

  async function login(req: LoginReq) {
    if (!req.id || !req.password) return;

    const result = await Axios.post('/login', req);
    console.log(result);
  }

  const handleLoginClick = () => {
    let req: LoginReq = {
      id: null,
      password: null,
    };

    childRefs.current.forEach((ref) => {
      const { id, value } = ref.getValue();

      req[id] = value;
    });

    login(req);
  };

  return (
    <>
      <TextInput
        key={'id'}
        id={'id'}
        width={320}
        height={30}
        placeholder={'텍스트를 입력해주세요'}
        title={'이름'}
        ref={(ref: LoginChildRef) => (childRefs.current[0] = ref)}
      />
      <TextInput
        key={'password'}
        id={'password'}
        width={320}
        height={30}
        placeholder={'텍스트를 입력해주세요'}
        title={'비밀번호'}
        ref={(ref: LoginChildRef) => (childRefs.current[1] = ref)}
      />
      <button type="button" onClick={handleLoginClick}>
        로그인
      </button>
    </>
  );
};

export default Login;
