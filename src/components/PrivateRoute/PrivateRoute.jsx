import { useSelector } from 'react-redux';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { selectIsLogedIn } from 'redux/selectors';

export function PrivateRoute({redirectTo='/'}) {
  const isLogedIn = useSelector(selectIsLogedIn);
  return (
    isLogedIn ? <Outlet/> : <Navigate to={redirectTo}/>
  );
}
