/*Design a custom hook named useLocalStorage to interact with local storage.
Create a useLocalStorage hook that allows storing and retrieving data from local storage.
Implement methods for setting, getting, and removing data using the hook.
Utilize the localStorage API within the hook to manage data.*/
import { useState } from "react";

const useLocalStorage = (initialsate, key) => {
  const [state, setState] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(key)) || initialsate;
    } catch (err) {
      return initialsate;
    }
  });
  const setItem = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setState(value);
    } catch (err) {
      console.log(err);
    }
  };
  const getItem = () => {
    return localStorage.getItem(key);
  };
  const removeItem = (value) => {
    try {
      localStorage.removeItem(key);
      setState(initialsate);
    } catch (err) {
      console.log(err);
    }
  };
  return [state, setItem, removeItem, getItem];
}
export default useLocalStorage;