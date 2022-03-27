import { FC, ReactElement } from 'react';
import { Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import styled from '@emotion/styled';

interface ICustomTooltipProps {
  title: string;
}

export const CustomTooltip: FC<ICustomTooltipProps> = ({ title, children }) => {
  const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.arrow}`]: {
      display: 'none',
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#232F34',
      padding: '0px 16px',
      borderRadius: '4px',
      fontFamily: 'Nunito',
      fontSize: 16,
      lineHeight: '32px',
      fontWeight: 400,
    },
  });

  return (
    <BootstrapTooltip title={title} followCursor>
      {children as ReactElement}
    </BootstrapTooltip>
  );
};
