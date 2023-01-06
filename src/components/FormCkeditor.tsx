import { FormControl, SxProps, TextFieldProps, Theme } from '@mui/material';
import React from 'react';
import {
  Control,
  Controller,
  ControllerProps,
  FieldError,
  FieldPath,
  Path,
  UseFormRegisterReturn,
} from 'react-hook-form';
import { FieldValues } from 'react-hook-form/dist/types/fields';

import CustomCkeditor from './CustomCkeditor';

export type FormCkeditorProps<T extends FieldValues = FieldValues> = Omit<
  TextFieldProps,
  'name'
> & {
  validation?: ControllerProps['rules'];
  name: FieldPath<T>;
  control?: Control<T>;
  sx?: SxProps<Theme>;
};
export default function FormCkeditor<
  TFieldValues extends FieldValues = FieldValues
>({
  validation = {},
  required,
  name,
  control,
  sx,
  ...rest
}: FormCkeditorProps<TFieldValues>): JSX.Element {
  if (required && !validation.required) {
    validation.required = '不能为空';
  }
  return (
    <FormControl fullWidth required={required} sx={sx}>
      <Controller
        name={name}
        control={control}
        rules={validation}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <CustomCkeditor
            value={value ?? ''}
            onChange={(val: string) => {
              onChange(val);
            }}
          />
        )}
      />
    </FormControl>
  );
}
