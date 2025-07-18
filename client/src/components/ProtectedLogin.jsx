import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedLogin = ({ children }) => {
  const token = useSelector((state) => state.auth.token); // Adjust path as per your slice

  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedLogin;