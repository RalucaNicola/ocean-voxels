import { useEffect, useState } from 'react';

const getIsDesktopSize = () => {
  return window.innerWidth > 1000;
};

const useIsDesktopSize = () => {
  const [isDesktopSize, setIsDesktopSize] = useState(getIsDesktopSize());

  const handleResize = () => {
    setIsDesktopSize(getIsDesktopSize());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isDesktopSize;
};

export default useIsDesktopSize;
