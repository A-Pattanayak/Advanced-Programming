# Assignment 19 - React Native Counter App

## Project Overview

This project is a single-screen React Native mobile application built for Assignment 19 of the Advanced Programming course.

The application works as a simple digital counter with a theme toggle feature. It allows the user to increment, decrement, and reset a counter value while also switching the interface between Light Mode and Dark Mode.

## Features

- Counter starts from 0
- Increment button increases the counter by 1
- Decrement button decreases the counter by 1
- Counter does not go below 0
- Reset button brings the counter back to 0
- Theme Toggle button switches between Light Mode and Dark Mode
- UI is centered using React Native Flexbox layout
- Code is separated into reusable components and a custom hook

## Technologies Used

- React Native
- JavaScript
- React Hooks
- useState
- Flexbox styling

## Project Structure

```text
Assignment 19/
  App.js
  src/
    components/
      CounterButton.js
      CounterControls.js
      CounterDisplay.js
      ThemeToggleButton.js
    hooks/
      useCounter.js
  android/
  ios/
  package.json
```

## Implementation Details

The counter state is managed using the `useState` hook. The counter update logic is separated into a custom hook so that the UI components remain clean and focused only on rendering.

The decrement logic includes a condition to prevent the counter from becoming negative. The theme state is also managed using `useState`, and conditional styles are applied based on the selected theme.

## Demo Video

The demo video is included in the `assignment-19` branch as:

```text
Demo video.mov
```

The video has been kept outside the `Assignment 19` project folder, but inside the same assignment branch.

## Emulator Note

The project was run and demonstrated on an Android emulator because I use an iOS device and did not have access to a physical Android device.
