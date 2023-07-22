import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import css from './HomeLink.module.css';

export default function HomeLink() {
  return (
    <NavLink className={css.NavLink} to="/">
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        Home
      </Typography>
    </NavLink>
  );
}
