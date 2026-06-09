import React from 'react';
import { View } from 'react-native';
import CounterButton from './CounterButton';

function CounterControls({ onIncrement, onDecrement, onReset }) {
  return (
    <View className="items-center">
      <View className="mb-5 flex-row gap-4">
        <CounterButton title="- 1" color="bg-red-500" onPress={onDecrement} />
        <CounterButton title="+ 1" color="bg-blue-500" onPress={onIncrement} />
      </View>

      <CounterButton title="Reset" color="bg-slate-500" onPress={onReset} />
    </View>
  );
}

export default CounterControls;
