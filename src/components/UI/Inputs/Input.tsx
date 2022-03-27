import { FC, useMemo } from 'react';
import { useField } from 'formik';
import { styled, TextField } from '@mui/material';

interface IFormFieldProps {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  helperText: string;
  error: boolean;
}

export const FormField: FC<IFormFieldProps> = ({ ...props }) => {
  const [field] = useField(props);

  const CustomTextField = useMemo(
    () =>
      styled(TextField)({
        '.MuiInputBase-input': {
          padding: '15.5px 16px',
          '&::placeholder': {
            color: '#7e7e7e',
          },
        },

        '.Mui-error .MuiOutlinedInput-notchedOutline': {
          borderWidth: '2px',
        },
      }),
    []
  );

  return <CustomTextField {...props} {...field} id="outlined-name" fullWidth />;
};
