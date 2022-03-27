import { FC } from 'react';
import MUIButton, { ButtonProps } from '@mui/material/Button';
import styled from '@emotion/styled';

interface IButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: FC<IButtonProps> = ({ text, type, disabled, onClick }) => {
  const ColorButton = styled(MUIButton)<ButtonProps>({
    width: '148px',
    height: '50px',
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: '#F4E041',
    borderRadius: '80px',
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 400,
    textTransform: 'none',

    '&:hover': {
      background: 'red',
      backgroundColor: '#FFE302',
    },

    '&:disabled': {
      color: '#ffffff',
      backgroundColor: '#b4b4b4',
    },
  });

  return (
    <ColorButton onClick={onClick} disabled={disabled} type={type}>
      {text}
    </ColorButton>
  );
};
