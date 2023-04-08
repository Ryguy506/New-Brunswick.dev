import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// rendering a page would keep the windows y-axis at previous page position so this fixes it
function StartTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default StartTop;