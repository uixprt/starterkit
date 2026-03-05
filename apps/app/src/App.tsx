import { useState, useEffect } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import { ModuleHeader, themes, iconRegistry, SvgIcon } from "@a/module-header";
import type { ThemeName } from "@a/module-header";

function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>("light");

  useEffect(() => {
    // Initialize icon registry with current theme
    iconRegistry.registerThemeIcons(currentTheme);
  }, []);

  const handleThemeChange = (newTheme: ThemeName) => {
    setCurrentTheme(newTheme);
    iconRegistry.registerThemeIcons(newTheme);
  };

  const handleMenuClick = () => {
    console.log("Menu button clicked");
  };

  const handleProfileClick = () => {
    console.log("Profile clicked");
  };

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <ModuleHeader
          appName="Starter Kit Application"
          currentTheme={currentTheme}
          onThemeChange={handleThemeChange}
          onMenuClick={handleMenuClick}
          onProfileClick={handleProfileClick}
        />

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
              Welcome to the Starter Kit
            </Typography>
            <Typography variant="body1" paragraph>
              This is a monorepo starter kit with the following structure:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" variant="body2" gutterBottom>
                <strong>apps/app</strong> - React + Vite + TypeScript
                application
              </Typography>
              <Typography component="li" variant="body2" gutterBottom>
                <strong>modules/module-header</strong> - Header module wrapper
              </Typography>
              <Typography component="li" variant="body2" gutterBottom>
                <strong>packages/design-system</strong> - MUI-based design
                system with themes and icon registry
              </Typography>
            </Box>
            <Typography variant="body1" paragraph sx={{ mt: 2 }}>
              The header uses the a-svg web component from @uixprt/elements
              package and supports theme switching. Try clicking the theme
              toggle button in the header!
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Example Icon Usage
              </Typography>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <SvgIcon name="star" size="32" color="gold" />
                <SvgIcon name="heart" size="32" color="red" />
                <SvgIcon name="home" size="32" color="blue" />
                <SvgIcon name="user" size="32" color="green" />
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
