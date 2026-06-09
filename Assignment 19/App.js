import React from 'react';
import './global.css';
import { View } from 'react-native';
import CounterControls from './src/components/CounterControls';
import CounterDisplay from './src/components/CounterDisplay';
import ThemeToggleButton from './src/components/ThemeToggleButton';
import useCounter from './src/hooks/useCounter';

function App() {
  const {
    count,
    isDarkMode,
    handleIncrement,
    handleDecrement,
    handleReset,
    toggleTheme,
  } = useCounter();

  return (
    <View
      className={`flex-1 ${
        isDarkMode ? 'bg-zinc-950' : 'bg-white'
      }`}
    >
      <View className="flex-1 items-center justify-center px-6">
        <CounterDisplay count={count} isDarkMode={isDarkMode} />

        <CounterControls
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
        />

        <ThemeToggleButton
          isDarkMode={isDarkMode}
          onToggleTheme={toggleTheme}
        />
      </View>
    </View>
  );
}

export default App;
