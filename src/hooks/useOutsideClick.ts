import { useEffect, useRef, useState } from 'react';

/**
 * 외부 영역 클릭 감지
 *
 * @returns
 */
const useOutsideClick = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOutside, setIsOutside] = useState(false);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleClickOutside = (event: MouseEvent) => {
    if (!ref.current || !event.target) {
      return;
    }

    if (ref && !ref.current.contains(event.target as HTMLElement)) {
      setIsOutside(true);
    } else {
      setIsOutside(false);
    }
  };

  return { ref, isOutside };
};

export default useOutsideClick;
