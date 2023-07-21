import { createPortal } from 'react-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ContactForm from 'components/ContactForm/ContactForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const modalRoot = document.getElementById('modal-root');

export default function BasiModal({ open, handleClose }) {
  return createPortal(
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ContactForm closeModal={handleClose} />
        </Box>
      </Modal>
    </div>,
    modalRoot
  );
}
