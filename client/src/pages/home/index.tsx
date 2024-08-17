import { Link } from 'react-router-dom';
import withAuth from '../../utils/withAuth';

function Home() {
  return (
    <>
      <Link to="/form">오늘 인증하러 가기</Link>
    </>
  );
}

export default withAuth(Home);
