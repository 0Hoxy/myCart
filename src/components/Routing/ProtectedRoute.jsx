import { Navigate, Outlet } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ user }) => {
  return user ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
