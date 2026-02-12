import React from 'react';
import type { ThemeType } from '../types';

interface ThemedButtonProps {
  theme: ThemeType;
  label: string;
}

export const ThemedButton = React.forwardRef<
  HTMLButtonElement,
  ThemedButtonProps
>((props, ref) => {
  const { theme, label } = props;

  const styles: React.CSSProperties =
    theme === 'light'
      ? {
          backgroundColor: '#ffffff',
          color: '#000000',
          border: '1px solid #000',
          padding: '10px 20px',
          cursor: 'pointer',
        }
      : {
          backgroundColor: '#333333',
          color: '#ffffff',
          border: '1px solid #fff',
          padding: '10px 20px',
          cursor: 'pointer',
        };

  return (
    <button ref={ref} style={styles}>
      {label}
    </button>
  );
});

ThemedButton.displayName = 'ThemedButton';
