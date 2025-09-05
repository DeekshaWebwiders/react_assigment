import { useEffect, useState } from 'react';

export function useDarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? 'dark' : '';
  }, [dark]);

  return [dark, setDark] as const;
}
