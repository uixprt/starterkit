# @a/design-system

Design system package with Material-UI components for dashboard applications.

## Features

- Dashboard header component with theme support
- Two built-in themes (light and dark)
- Icon registry with theme-specific logos
- Integration with @uixprt/elements svg web component
- Built with MUI v5 and React 18

## Installation

```bash
npm install @a/design-system
```

## Usage

```tsx
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { DashboardHeader, themes, iconRegistry } from "@a/design-system";
import type { ThemeName } from "@a/design-system";

function App() {
  const [themeName, setThemeName] = useState<ThemeName>("light");

  const handleThemeToggle = () => {
    const newTheme = themeName === "light" ? "dark" : "light";
    setThemeName(newTheme);
    iconRegistry.registerThemeIcons(newTheme);
  };

  return (
    <ThemeProvider theme={themes[themeName]}>
      <DashboardHeader
        title="My Dashboard"
        theme={themeName}
        onThemeToggle={handleThemeToggle}
      />
    </ThemeProvider>
  );
}
```

## Components

### DashboardHeader

Main header component with menu, logo, theme toggle, and user profile menu.

### SvgIcon

Wrapper component for @uixprt/elements svg web component.

## Themes

Two pre-configured themes available:

- `light` - Light mode with blue primary color
- `dark` - Dark mode with light blue primary color

Each theme loads different logo variants through the icon registry.
