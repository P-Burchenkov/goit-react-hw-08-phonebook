import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import { deleteContact } from 'redux/contacts/operations';

export default function DeleteButton({ id }) {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Button variant="contained" color="error" onClick={onDelete}>
      Delete
    </Button>
  );
}
