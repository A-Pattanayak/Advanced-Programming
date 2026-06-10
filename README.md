# Assignment 19

## Question

Build a single-screen mobile application using React Native: Simple Digital Counter and Theme Toggle App.

The app functions as a digital counter that allows users to increment, decrement, and reset a number displayed on the screen. It must also include a Theme Toggle button that switches the screen background and text colors between Light Mode and Dark Mode.

Implementation Rules:

Core Layout:

- Use standard React Native components: View, Text, and TouchableOpacity or Button
- Counter UI should be perfectly centered on the screen

State Management:

- Use useState to manage the current counter value
- Use useState to manage the active theme mode

Counter Logic:

- Counter starts at 0
- Increment increases count by 1
- Decrement decreases count by 1 but never below 0
- Reset brings count back to 0

Dynamic Styling:

- Light Mode: white background with dark text
- Dark Mode: dark gray or black background with white text
- Toggle Theme instantly swaps styles across the entire screen

You must have:

1. UI Layout and Component Structure using Flexbox and proper React Native style properties
2. Counter State and Validation Logic with a decrement safety check
3. Dynamic Theme Toggling using conditional styling or ternary operators
4. Clean code with meaningful names such as handleIncrement and toggleTheme
5. No obvious runtime crashes during interactions
## Demo Note

A demo video for the React Native counter and theme toggle app is included in this branch as `Assignment 19/Demo video.mov`.

The project was run and demonstrated on an Android emulator because I use an iOS device and did not have access to a physical Android device.
