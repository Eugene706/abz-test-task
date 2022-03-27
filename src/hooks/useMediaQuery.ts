import { useEffect, useState } from 'react';

type TMediaType = 'small' | 'medium' | 'large';

const useMediaQuery = (min: number, max: number) => {
  const [currentSize, setCurrentSize] = useState<TMediaType>('large');

  const defineScreenSize = () => {
    const screenSize = window.innerWidth;

    if (screenSize > min && screenSize <= max) {
      setCurrentSize('medium');
    } else if (screenSize <= min) {
      setCurrentSize('small');
    } else {
      setCurrentSize('large');
    }
  };

  useEffect(() => {
    defineScreenSize();
    window.addEventListener('resize', defineScreenSize);
    return () => window.removeEventListener('resize', defineScreenSize);
  }, []);

  return currentSize;
};

export default useMediaQuery;
