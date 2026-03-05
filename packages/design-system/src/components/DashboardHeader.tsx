import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { SvgIcon } from './SvgIcon';
import { iconRegistry } from '../icon-registry';
import type { ThemeName } from '../themes';

export interface DashboardHeaderProps {
  title?: string;
  theme: ThemeName;
  onThemeToggle: () => void;
  onMenuClick?: () => void;
  onProfileClick?: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title = 'Dashboard',
  theme,
  onThemeToggle,
  onMenuClick,
  onProfileClick,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logo = iconRegistry.getIcon(`logo-${theme}`);
  const brandIcon = iconRegistry.getIcon(`brand-${theme}`);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>

        {logo && (
          <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
            <SvgIcon
              src={logo.src}
              size="32"
              color="currentColor"
              label="Logo"
            />
          </Box>
        )}

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>

        {brandIcon && (
          <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
            <SvgIcon
              src={brandIcon.src}
              size="28"
              color="currentColor"
              label="Brand"
            />
          </Box>
        )}

        <IconButton sx={{ ml: 1 }} onClick={onThemeToggle} color="inherit">
          {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => { handleClose(); onProfileClick?.(); }}>
              Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};
