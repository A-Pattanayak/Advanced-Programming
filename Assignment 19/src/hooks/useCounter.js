import { useState } from 'react';

function useCounter() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return {
    count,
    isDarkMode,
    handleIncrement,
    handleDecrement,
    handleReset,
    toggleTheme,
  };
}

export default useCounter;
