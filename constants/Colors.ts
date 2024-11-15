/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const violet = '#f0affa'; // Mindler Violet Purple
const tintColorDark = '#fff';
const something = '#f5f3f3'; // Mindler Light Gray

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: violet,
    icon: '#687076',
    tabIconDefault: '#000',
    tabIconSelected: violet,
    accentColor: violet,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: 'white',
    tabIconSelected: tintColorDark,
    accentColor: violet,
  },
};
