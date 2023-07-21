import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLogedIn } from 'redux/selectors';

export default function PrivateRoute({ redirectTo = '/login' }) {
  const isLogedIn = useSelector(selectIsLogedIn);
  return isLogedIn ? <Outlet /> : <Navigate to={redirectTo} />;
}
