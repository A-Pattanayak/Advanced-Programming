import React from 'react';
import { Text, View } from 'react-native';

function CounterDisplay({ count, isDarkMode }) {
  return (
    <View className="items-center">
      <Text
        className={`mb-3 text-xl font-semibold ${
          isDarkMode ? 'text-white' : 'text-zinc-900'
        }`}
      >
        Current Count
      </Text>

      <Text
        className={`mb-10 text-8xl font-bold ${
          isDarkMode ? 'text-white' : 'text-zinc-900'
        }`}
      >
        {count}
      </Text>
    </View>
  );
}

export default CounterDisplay;
