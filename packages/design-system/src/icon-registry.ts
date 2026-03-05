export interface IconConfig {
  name: string;
  src: string;
}

export interface ThemeIconConfig {
  logo: IconConfig;
  brandIcon: IconConfig;
}

export const lightThemeIcons: ThemeIconConfig = {
  logo: {
    name: 'logo-light',
    src: '/icons/logo-light.svg',
  },
  brandIcon: {
    name: 'brand-light',
    src: '/icons/brand-light.svg',
  },
};

export const darkThemeIcons: ThemeIconConfig = {
  logo: {
    name: 'logo-dark',
    src: '/icons/logo-dark.svg',
  },
  brandIcon: {
    name: 'brand-dark',
    src: '/icons/brand-dark.svg',
  },
};

export class IconRegistry {
  private static instance: IconRegistry;
  private icons: Map<string, IconConfig> = new Map();
  private currentTheme: 'light' | 'dark' = 'light';

  private constructor() {
    this.registerThemeIcons('light');
  }

  static getInstance(): IconRegistry {
    if (!IconRegistry.instance) {
      IconRegistry.instance = new IconRegistry();
    }
    return IconRegistry.instance;
  }

  registerIcon(icon: IconConfig): void {
    this.icons.set(icon.name, icon);
  }

  getIcon(name: string): IconConfig | undefined {
    return this.icons.get(name);
  }

  registerThemeIcons(theme: 'light' | 'dark'): void {
    this.currentTheme = theme;
    const themeIcons = theme === 'light' ? lightThemeIcons : darkThemeIcons;
    
    Object.values(themeIcons).forEach(icon => {
      this.registerIcon(icon);
    });
  }

  getCurrentTheme(): 'light' | 'dark' {
    return this.currentTheme;
  }

  getAllIcons(): IconConfig[] {
    return Array.from(this.icons.values());
  }
}

export const iconRegistry = IconRegistry.getInstance();

export type { ThemeName } from './themes/index';
