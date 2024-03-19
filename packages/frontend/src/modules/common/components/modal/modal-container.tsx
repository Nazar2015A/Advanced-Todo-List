import React, { FC } from 'react';
import { Modal, Typography } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {
  StyledModalContent,
  StyledModalContentBtn,
  StyledModalContentHeader
} from './modal.styled';
import { ITodoSchema } from '../../types/TodoTypes';
import { ModalForm } from './modal-form';
import { FormikSubmit } from '../../types/reset-form';

interface Props {
  open: boolean;
  title: string;
  onSubmit: FormikSubmit;
  modalClose: () => void;
  initialValues: ITodoSchema;
}

export const ModalContainer: FC<Props> = ({ open, title, onSubmit, modalClose, initialValues }) => (
  <Modal
    open={open}
    onClose={modalClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <StyledModalContent>
      <StyledModalContentHeader>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <StyledModalContentBtn onClick={modalClose}>
          <CloseOutlinedIcon />
        </StyledModalContentBtn>
      </StyledModalContentHeader>

      <ModalForm onSubmit={onSubmit} initialValues={initialValues} title={title} />
    </StyledModalContent>
  </Modal>
);
