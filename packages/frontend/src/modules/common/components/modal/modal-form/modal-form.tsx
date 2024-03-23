import React, { FC } from 'react';
import { Formik } from 'formik';
import { Checkbox, FormControlLabel, ThemeProvider } from '@mui/material';
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
import { CustomInput } from '../../custom-input/custom-input.component';

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
          <CustomInput
            fieldName="title"
            value={values.title}
            onChange={handleChange}
            error={(errors.title && touched.title) as boolean | undefined}
            helperText={errors.title && touched.title ? errors.title : ''}
          />
          <CustomInput
            fieldName="description"
            value={values.description}
            onChange={handleChange}
            error={(errors.description && touched.description) as boolean | undefined}
            helperText={errors.description && touched.description ? errors.description : ''}
          />

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
