import { AccountCircle } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import LogOutButton from 'components/LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { selectEmail } from 'redux/selectors';

export default function UserMenu() {
  const email = useSelector(selectEmail);
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <LogOutButton />
      <Typography variant="h6" component="div">
        {`${email}`}
      </Typography>
      <AccountCircle />
    </Box>
  );
}
