import React, { ChangeEvent, FC, useMemo } from 'react';
import { CustomFormLabel, CustomTextField, StyledInput } from './custom-input.styled';
import { FormControl, TextField } from '@mui/material';
import { COLORS } from '../../../theme';

interface Props extends React.PropsWithChildren {
  fieldName: string;
  value: string;
  onChange: (e: ChangeEvent<any>) => void;
  error?: boolean;
  helperText?: string;
}

export const CustomInput: FC<Props> = ({ fieldName, children, ...props }) => {
  const capitalizeLabel = useMemo(() => fieldName.charAt(0).toUpperCase() + fieldName.slice(1), []);
  return (
    <StyledInput>
      <FormControl fullWidth>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <CustomFormLabel htmlFor={fieldName}>{fieldName}</CustomFormLabel>
        <CustomTextField
          fullWidth
          id={fieldName}
          name={fieldName}
          label={capitalizeLabel}
          {...props}
        />
      </FormControl>
    </StyledInput>
  );
};
