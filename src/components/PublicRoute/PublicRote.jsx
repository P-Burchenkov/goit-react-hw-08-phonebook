import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLogedIn } from 'redux/selectors';

export default function PublicRoute({ redirectTo = '/', restricted = false }) {
  const isLogedin = useSelector(selectIsLogedIn);
  const shouldRedirect = isLogedin && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
}
