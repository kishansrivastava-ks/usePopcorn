import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    // 🔴 this would allow to initally set the watched list to the data stored in the local storage

    // this fn needs to be a pure fn without any arguments
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState; //since it was stored as a string
  });

  useEffect(
    // storing the watched list in the local storage
    function () {
      localStorage.setItem(key, JSON.stringify(value));
      // we didn;t use the spread here because this useeffect would only work after the watched list has been updated so we dont need its current state
    },
    [value, key]
  );

  return [value, setValue];
}
