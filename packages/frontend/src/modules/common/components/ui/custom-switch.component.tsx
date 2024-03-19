import { FormControlLabel, Switch } from '@mui/material';
import React, { ChangeEvent, FC } from 'react';

interface Props {
  action: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  label: string;
}

export const CustomSwitch: FC<Props> = ({ action, checked, label }) => (
  <FormControlLabel
    onChange={
      (e: React.SyntheticEvent<Element, Event>) => action(e as ChangeEvent<HTMLInputElement>)
      // eslint-disable-next-line react/jsx-curly-newline
    }
    control={<Switch />}
    label={label}
    checked={checked}
  />
);
