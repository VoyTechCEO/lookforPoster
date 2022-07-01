import { useEffect } from 'react';

export const useOutsideDetector = (
  ref: React.MutableRefObject<any>,
  callback: () => void
) => {
  useEffect(() => {
    /**
     * Evoke callback if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    // Bind the event listener
    document.addEventListener('click', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);
};
