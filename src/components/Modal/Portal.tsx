import { useState, useEffect, FC, ReactElement } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactElement<HTMLDivElement>;
}

export const Portal: FC<PortalProps> = ({ children }) => {
  const [container] = useState(() => {
    return document.createElement('div');
  });

  useEffect(() => {
    container.classList.add('root-portal');
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};

export default Portal;
