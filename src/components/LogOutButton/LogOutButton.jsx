import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Authorization/operations';

export default function LogOutButton() {
  const dispatch = useDispatch();
  const handleclick = () => {
    dispatch(logOut());
  };

  return (
    <Button onClick={handleclick} variant="contained" color="error">
      Log Out
    </Button>
  );
}
