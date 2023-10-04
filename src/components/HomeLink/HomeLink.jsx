import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import css from './HomeLink.module.css';

export default function HomeLink() {
  return (
    <NavLink className="link" to="/">
      <Typography
        variant="h6"
        noWrap
        component="div"
        className="link"
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        Home
      </Typography>
    </NavLink>
  );
}
