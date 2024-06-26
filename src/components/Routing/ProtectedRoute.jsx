import { Navigate, Outlet } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import { useContext } from 'react';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ user }) => {
  const contextUser = useContext(UserContext);
  const currentUser = user || contextUser;
  console.log('User: ', user);
  return currentUser ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
