import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

function ThemeToggleButton({ isDarkMode, onToggleTheme }) {
  return (
    <TouchableOpacity
      className={`mt-8 rounded-lg border px-6 py-4 ${
        isDarkMode ? 'border-white bg-white' : 'border-zinc-900 bg-zinc-900'
      }`}
      activeOpacity={0.8}
      onPress={onToggleTheme}
    >
      <Text
        className={`text-center text-base font-bold ${
          isDarkMode ? 'text-zinc-950' : 'text-white'
        }`}
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </Text>
    </TouchableOpacity>
  );
}

export default ThemeToggleButton;
