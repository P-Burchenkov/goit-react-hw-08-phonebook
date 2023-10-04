import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, List, ListItem, Typography } from '@mui/material';

import DeleteButton from 'components/DeleteButton';
import { selectFilteredContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContactsList = useSelector(selectFilteredContacts);

  return (
    <List sx={{ minWidth: '480px' }}>
      {filteredContactsList?.map(({ number, name, id }) => {
        return (
          <ListItem
            key={id}
            sx={{
              minWidth: '480px',
              display: 'flex',
              justifyContent: 'space-between',

              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <Typography variant="h6" component="span">
                {name}
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontStyle: 'italic' }}
                component="span"
              >
                {number}
              </Typography>
            </Box>
            <DeleteButton id={id} />
          </ListItem>
        );
      })}
    </List>
  );
}
