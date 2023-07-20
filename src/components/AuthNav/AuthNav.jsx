import { NavLink } from 'react-router-dom';

export function AuthNav() {
  return (
    <>
      <NavLink to="/login">Log in</NavLink>
      <NavLink to="/auth">Authorization</NavLink>
    </>
  );
}
