import { Button } from '@mui/material';

export default function OpenModalButton({ handleOpen }) {
  return (
    <Button onClick={handleOpen} variant="contained" color="success">
      Add Contact
    </Button>
  );
}
