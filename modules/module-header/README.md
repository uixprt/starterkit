# @a/module-header

Module wrapper for the design system header component. Provides a consistent header interface for modular applications.

## Features

- Wraps @a/design-system DashboardHeader
- Simplified API for modular applications
- Theme management integration
- Re-exports design system utilities

## Installation

```bash
npm install @a/module-header
```

## Usage

```tsx
import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { ModuleHeader, themes, iconRegistry } from '@a/module-header';
import type { ThemeName } from '@a/module-header';

function App() {
  const [theme, setTheme] = useState<ThemeName>('light');

  const handleThemeChange = (newTheme: ThemeName) => {
    setTheme(newTheme);
    iconRegistry.registerThemeIcons(newTheme);
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <ModuleHeader
        appName="My Application"
        currentTheme={theme}
        onThemeChange={handleThemeChange}
        onMenuClick={() => console.log('Menu clicked')}
        onProfileClick={() => console.log('Profile clicked')}
      />
    </ThemeProvider>
  );
}
```

## Props

- `appName` - Application name to display
- `currentTheme` - Current theme ('light' or 'dark')
- `onThemeChange` - Callback when theme changes
- `onMenuClick` - Callback when menu button clicked
- `onProfileClick` - Callback when profile clicked
- `title` - Optional custom title (overrides appName)
