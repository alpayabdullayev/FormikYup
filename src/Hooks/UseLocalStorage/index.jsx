import { useEffect, useState } from 'react';

function useLocalStorage(key) {
  const [localData, setLocalData] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : {});

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localData));
  }, [localData, key]);

  return [localData, setLocalData];
}

export default useLocalStorage;
