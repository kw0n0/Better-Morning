import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const withAuth = (WrappedComponent: React.ComponentType) => {
  const WithAuth: React.FC = (props) => {
    const { isLogin } = useAuth();

    if (!isLogin) {
      return <Navigate to="/login" replace />;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuth;
};

export default withAuth;
