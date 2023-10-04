import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { deleteContact } from 'redux/contacts/operations';

export default function DeleteButton({ id }) {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <IconButton aria-label="delete contact" onClick={onDelete}>
      <DeleteIcon />
    </IconButton>
  );
}
