
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cookies } from '../../config/cookies';

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
   
    const userToken = cookies.get('user_token');

   
    if (userToken) {
      navigate('/'); 
    }
  }, [navigate]);

  return children;
};

export default AuthGuard;
