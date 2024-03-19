import React, { FC } from 'react';
import { Formik } from 'formik';
import { Checkbox, FormControlLabel, TextField, ThemeProvider } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { TodoSchema, darkTheme } from '../modal.const';
import { ITodoSchema } from '../../../types/TodoTypes';
import {
  StyledForm,
  StyledInput,
  StyledSubmitBtn,
  StyledSubmitBtnContainer
} from './modal-form.styled';
import { FormikSubmit } from '../../../types/reset-form';

interface Props {
  onSubmit: FormikSubmit;
  initialValues: ITodoSchema;
  title: string;
}

export const ModalForm: FC<Props> = ({ onSubmit, initialValues, title }) => (
  <ThemeProvider theme={darkTheme}>
    <Formik initialValues={initialValues} validationSchema={TodoSchema} onSubmit={onSubmit}>
      {({ errors, touched, values, handleChange }) => (
        <StyledForm>
          <StyledInput>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="title">Title</label>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="Title"
              value={values.title}
              onChange={handleChange}
              error={(errors.title && touched.title) as boolean | undefined}
              helperText={errors.title && touched.title ? errors.title : ''}
            />
          </StyledInput>
          <StyledInput>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="description">Description</label>
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description"
              value={values.description}
              onChange={handleChange}
              error={(errors.description && touched.description) as boolean | undefined}
              helperText={errors.description && touched.description ? errors.description : ''}
            />
          </StyledInput>
          <StyledInput>
            <FormControlLabel
              control={<Checkbox />}
              label="Toggle Completed"
              name="isCompleted"
              checked={values.isCompleted}
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Toggle Private"
              name="isPrivate"
              checked={values.isPrivate}
              onChange={handleChange}
            />
          </StyledInput>

          <StyledSubmitBtnContainer>
            <StyledSubmitBtn type="submit">
              <AddOutlinedIcon />
              {title}
            </StyledSubmitBtn>
          </StyledSubmitBtnContainer>
        </StyledForm>
      )}
    </Formik>
  </ThemeProvider>
);
