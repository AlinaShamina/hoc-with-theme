import { forwardRef } from 'react';
import type { ThemeType } from '../types';

interface ThemedButtonProps {
  theme: ThemeType;
  label: string;
}

export const ThemedButton = forwardRef<
  HTMLButtonElement,
  ThemedButtonProps
>(({ theme, label }, ref) => {
  const isLight = theme === 'light';

  return (
    <button
      ref={ref}
      style={{
        padding: '12px 24px',
        borderRadius: '8px',
        border: 'none',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: isLight ? '#ffffff' : '#333',
        color: isLight ? '#000' : '#fff',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease'
      }}
    >
      {label}
    </button>
  );
});

ThemedButton.displayName = 'ThemedButton';
