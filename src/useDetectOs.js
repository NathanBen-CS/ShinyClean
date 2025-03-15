import { useEffect } from 'react';

const useDetectOS = () => {
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const htmlElement = document.documentElement;

    if (/android/i.test(userAgent)) {
      htmlElement.classList.add('android');
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      htmlElement.classList.add('ios');
    } else {
      htmlElement.classList.add('pc');
    }

    // Cleanup function to remove the classes if the component is unmounted
    return () => {
      htmlElement.classList.remove('android', 'ios', 'pc');
    };
  }, []);
};

export default useDetectOS;