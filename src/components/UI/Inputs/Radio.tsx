import { FC } from 'react';
import { useField } from 'formik';
import { FormControlLabel, Radio, RadioGroup, RadioProps, styled } from '@mui/material';
import { IPositions } from 'types/form';

interface IRadioInputProps {
  name: string;
  positions: IPositions[] | undefined;
}

export const RadioInput: FC<IRadioInputProps> = ({ positions, ...props }) => {
  const [field] = useField(props);

  const BpIcon = styled('span')({
    width: 20,
    height: 20,
    border: '1px solid #D0CFCF',
    borderRadius: '50%',
  });

  const BpCheckedIcon = styled(BpIcon)({
    borderColor: '#00BDD3',

    '&:before': {
      display: 'block',
      margin: '4px',
      borderRadius: '50%',
      backgroundColor: '#00BDD3',
      width: 10,
      height: 10,
      content: '""',
    },
  });

  const CustomRadio = styled(Radio)<RadioProps>({
    padding: '0 12px 0 11px',
    '&:hover': {
      background: 'none',
    },

    '.MuiTouchRipple-root': {
      position: 'static',
    },
  });

  return (
    <RadioGroup sx={{ gap: '9px' }} {...props} {...field}>
      {positions &&
        positions.map((item) => (
          <FormControlLabel
            value={item.id}
            key={item.id}
            label={item.name}
            control={<CustomRadio checkedIcon={<BpCheckedIcon />} icon={<BpIcon />} />}
          />
        ))}
    </RadioGroup>
  );
};
