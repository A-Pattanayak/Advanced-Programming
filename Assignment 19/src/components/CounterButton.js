import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

function CounterButton({ title, onPress, color }) {
  return (
    <TouchableOpacity
      className={`${color} min-w-28 rounded-lg px-5 py-4`}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text className="text-center text-base font-bold text-white">
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default CounterButton;
