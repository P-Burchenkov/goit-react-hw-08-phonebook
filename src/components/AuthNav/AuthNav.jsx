import { NavLink } from 'react-router-dom';
import css from './Authnav.module.css';
import Typography from '@mui/material/Typography';

export default function AuthNav() {
  return (
    <nav className={css.nav}>
      <NavLink className={css.NavLink} to="/login">
        <Typography
          variant="h6"
          noWrap
          component="span"
          className="link"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Sign in
        </Typography>
      </NavLink>
      <NavLink className={css.NavLink} to="/auth">
        <Typography
          variant="h6"
          noWrap
          component="span"
          className="link"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Sign up
        </Typography>
      </NavLink>
    </nav>
  );
}
