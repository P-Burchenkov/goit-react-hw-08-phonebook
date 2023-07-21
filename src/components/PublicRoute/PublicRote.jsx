import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLogedIn } from 'redux/selectors';

export default function PublicRoute({ redirectTo = '/login' }) {
  const isLogedin = useSelector(selectIsLogedIn);
  return isLogedin ? <Navigate to={redirectTo} /> : <Outlet />;
}
