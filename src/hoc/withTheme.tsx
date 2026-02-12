import { forwardRef } from 'react';
import type { ComponentType } from 'react';
import type { ThemeType } from '../types';

interface WithThemeProps {
  theme: ThemeType;
}

export function withTheme<P extends object>(
  WrappedComponent: ComponentType<P & WithThemeProps>
) {
  const ComponentWithTheme = forwardRef<unknown, P & WithThemeProps>(
    (props, ref) => {
      const { theme, ...restProps } = props;

      return (
        <WrappedComponent
          ref={ref}
          theme={theme}
          {...(restProps as P)}
        />
      );
    }
  );

  const wrappedName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  ComponentWithTheme.displayName = `withTheme(${wrappedName})`;

  return ComponentWithTheme;
}
