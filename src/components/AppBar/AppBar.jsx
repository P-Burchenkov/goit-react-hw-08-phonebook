import { useSelector } from 'react-redux';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { selectIsLogedIn } from 'redux/selectors';
import OpenModalButton from 'components/OpenModalButton/OpenModalButton';
import BasiModal from 'components/Modal/Modal';
import Filter from 'components/SearchBox/SearchBox';
import SiteNavigation from 'components/SiteNavigation/SiteNavigation';
import UserMenu from 'components/UserMenu/UserMenu';

export default function PrimarySearchAppBar() {
  const isLogedIn = useSelector(selectIsLogedIn);
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Phonebook
          </Typography>
          <SiteNavigation />
          {isLogedIn && <Filter />}
          <Box sx={{ flexGrow: 1 }}>
            {isLogedIn && <OpenModalButton handleOpen={handleOpen} />}
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 4,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isLogedIn && <UserMenu />}
          </Box>
        </Toolbar>
      </AppBar>
      {showModal && <BasiModal open={showModal} handleClose={handleClose} />}
    </Box>
  );
}
