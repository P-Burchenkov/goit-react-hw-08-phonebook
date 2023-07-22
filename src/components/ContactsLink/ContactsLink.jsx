import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

import css from './ContactsLink.module.css';

export default function ContactsLink() {
  return (
    <NavLink className={css.NavLink} to="/contacts">
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        Contacts
      </Typography>
    </NavLink>
  );
}
