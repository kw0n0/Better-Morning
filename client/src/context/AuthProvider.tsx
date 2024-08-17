import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext<{
  isLogin: boolean;
  changeLoginStatus: () => void;
}>({
  isLogin: false,
  changeLoginStatus: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const changeLoginStatus = () => {
    setIsLogin((prev) => !prev);
  };

  useEffect(() => {
    if (isLogin) {
      navigate('/');
      return;
    }

    navigate('/login');
  }, [isLogin]);

  return (
    <AuthContext.Provider value={{ isLogin, changeLoginStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
