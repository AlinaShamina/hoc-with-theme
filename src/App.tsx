import { useState } from 'react';
import { withTheme } from './hoc/withTheme';
import { ThemedButton } from './components/ThemedButton';
import type { ThemeType } from './types';

const ThemedButtonWithTheme = withTheme(ThemedButton);

export default function App() {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const isLight = theme === 'light';

  return (
    <div
      style={{
        backgroundColor: isLight ? '#f5f5f5' : '#1e1e1e',
        color: isLight ? '#000' : '#fff',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.3s ease'
      }}
    >
      <h1 style={{ marginBottom: '20px' }}>
        Theme: {theme}
      </h1>

      <button
        onClick={toggleTheme}
        style={{
          marginBottom: '30px',
          padding: '10px 20px',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Toggle Theme
      </button>

      <ThemedButtonWithTheme
        theme={theme}
        label="Themed Button"
      />
    </div>
  );
}
