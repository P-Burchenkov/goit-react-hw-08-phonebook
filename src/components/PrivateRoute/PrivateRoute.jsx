import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import { selectIsLogedIn } from 'redux/selectors';

export function PrivateRoute({ children, ...props }) {
  const isLogedIn = useSelector(selectIsLogedIn);
  return (
    <Route {...props}>{isLogedIn ? children : <Navigate to="/login" />}</Route>
  );
}
