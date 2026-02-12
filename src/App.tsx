import React, { useState } from 'react';
import { withTheme } from './hoc/withTheme';
import { ThemedButton } from './components/ThemedButton';
import type { ThemeType } from './types';

const ThemedButtonWithTheme = withTheme(ThemedButton);

export default function App() {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const containerStyle: React.CSSProperties =
    theme === 'light'
      ? { backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '40px' }
      : { backgroundColor: '#111', minHeight: '100vh', padding: '40px' };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: theme === 'light' ? '#000' : '#fff' }}>
        Current theme: {theme}
      </h1>

      <button onClick={toggleTheme} style={{ marginBottom: '20px' }}>
        Toggle Theme
      </button>

      <ThemedButtonWithTheme
        theme={theme}
        label="Click Me"
      />
    </div>
  );
}
