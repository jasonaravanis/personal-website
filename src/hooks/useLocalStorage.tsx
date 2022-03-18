import { useState } from "react";

// If necessary to extend this to use events that update if useLocalStorage is changed in a different place, see here:
// https://usehooks-ts.com/react-hook/use-local-storage
// https://usehooks-ts.com/react-hook/use-event-listener

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error(
        new Error("useLocalStorage hook error - useState initialisation")
      );
      console.error(err);
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(new Error("useLocalStorage hook error - useState updater"));
      console.error(err);
    }
  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;
