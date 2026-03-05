import React from 'react';
import { DashboardHeader } from '@a/design-system';
import type { DashboardHeaderProps, ThemeName } from '@a/design-system';

export interface ModuleHeaderProps extends Omit<DashboardHeaderProps, 'theme' | 'onThemeToggle'> {
  currentTheme: ThemeName;
  onThemeChange: (theme: ThemeName) => void;
  appName?: string;
}

/**
 * ModuleHeader - A wrapper component for the design system's DashboardHeader.
 * Provides a consistent header interface for modular applications.
 */
export const ModuleHeader: React.FC<ModuleHeaderProps> = ({
  currentTheme,
  onThemeChange,
  appName,
  title,
  ...props
}) => {
  const handleThemeToggle = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    onThemeChange(newTheme);
  };

  return (
    <DashboardHeader
      {...props}
      title={title || appName || 'Application'}
      theme={currentTheme}
      onThemeToggle={handleThemeToggle}
    />
  );
};

export default ModuleHeader;
