import { useSelector } from 'react-redux';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { selectIsLogedIn, selectUser } from 'redux/selectors';
import LogOutButton from 'components/LogOutButton/LogOutButton';
import OpenModalButton from 'components/OpenModalButton/OpenModalButton';
import BasiModal from 'components/Modal/Modal';
import Filter from 'components/SearchBox/SearchBox';
import AuthNav from 'components/AuthNav';

export default function PrimarySearchAppBar() {
  const isLogedIn = useSelector(selectIsLogedIn);
  const userName = useSelector(selectUser);
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
          {isLogedIn && <Filter />}
          {!isLogedIn && (
            <AuthNav
              style={{
                marginLeft: 48,
              }}
            />
          )}
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
            <Box>{isLogedIn && <LogOutButton />}</Box>
            <Typography variant="h5">
              {isLogedIn && ` Hello "${userName} "!!!  `}
            </Typography>
            <Box>{isLogedIn && <AccountCircle />}</Box>
          </Box>
        </Toolbar>
      </AppBar>
      {showModal && <BasiModal open={showModal} handleClose={handleClose} />}
    </Box>
  );
}
