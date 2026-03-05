# Getting Started with Starter Kit

This guide will help you set up and run the starter kit.

## Prerequisites

- Node.js 18+ (with npm)
- Optional: pnpm for faster installations

## Setup

### Option 1: Using the setup script (recommended)

```bash
cd starterkit
./setup.sh
```

This will:
1. Install all dependencies
2. Build the design-system package
3. Build the module-header module
4. Prepare everything for development

### Option 2: Manual setup

```bash
# Navigate to the starterkit directory
cd starterkit

# Install dependencies (choose one)
npm install
# or
pnpm install

# Build the design-system package
cd packages/design-system
npm run build
cd ../..

# Build the module-header module
cd modules/module-header
npm run build
cd ../..
```

## Running the Application

Once setup is complete, start the development server:

```bash
npm run dev
# or
pnpm dev
```

The application will open in your browser at http://localhost:3000

## Development Workflow

### Making Changes to the Design System

1. Navigate to the package:
   ```bash
   cd packages/design-system
   ```

2. Start watch mode:
   ```bash
   npm run dev
   ```

3. Make your changes. The app will automatically pick them up.

### Making Changes to the Module Header

1. Navigate to the module:
   ```bash
   cd modules/module-header
   ```

2. Rebuild after changes:
   ```bash
   npm run build
   ```

### Making Changes to the App

Changes to the app are instantly reflected through Vite's HMR (Hot Module Replacement). Just edit files in `apps/app/src/` and save.

## Building for Production

### Build Everything

```bash
npm run build
```

This builds:
- The design-system package
- The module-header module
- The app (production-ready)

### Build Individual Packages

```bash
# Design system
cd packages/design-system && npm run build

# Module header
cd modules/module-header && npm run build

# App
cd apps/app && npm run build
```

## Creating Distributable Packages

To create npm packages (.tgz files):

```bash
npm run pack:all
```

Or individually:

```bash
cd packages/design-system && npm pack
cd modules/module-header && npm pack
```

## Project Structure

```
starterkit/
├── apps/
│   └── app/                      # Main React application
│       ├── src/
│       │   ├── App.tsx           # Main app component
│       │   └── main.tsx          # Entry point
│       ├── public/
│       │   └── icons/            # Theme-specific logos
│       └── package.json
│
├── modules/
│   └── module-header/            # Header wrapper module
│       ├── src/
│       │   ├── ModuleHeader.tsx  # Header component
│       │   └── index.ts
│       └── package.json
│
├── packages/
│   └── design-system/            # Design system with MUI
│       ├── src/
│       │   ├── components/
│       │   │   ├── DashboardHeader.tsx
│       │   │   └── SvgIcon.tsx
│       │   ├── themes/
│       │   │   └── index.ts      # Light & dark themes
│       │   ├── icon-registry.ts  # Icon management
│       │   └── index.ts
│       └── package.json
│
└── elements/                      # @a/elements web components
```

## Features Overview

### Theme Switching

The app includes a theme toggle button in the header. Click it to switch between light and dark modes. The logos automatically change based on the theme.

### Icon Registry

The design system uses an icon registry that:
- Manages theme-specific icons
- Automatically loads correct logos for each theme
- Integrates with @a/elements svg web component

### Web Components

The app uses the `<a-svg>` web component from @a/elements for displaying icons. Example usage:

```tsx
<a-svg name="star" size="32" color="gold"></a-svg>
```

### Material-UI Components

All UI components are built with Material-UI v5:
- AppBar with responsive toolbar
- Menu and navigation
- Typography system
- Theme provider
- Customizable styles

## Customization

### Adding Your Own Theme

1. Edit `packages/design-system/src/themes/index.ts`
2. Add a new theme object
3. Update the themes record
4. Rebuild the design-system: `npm run build`

### Adding Theme-Specific Icons

1. Edit `packages/design-system/src/icon-registry.ts`
2. Update `lightThemeIcons` or `darkThemeIcons`
3. Add your SVG files to `apps/app/public/icons/`
4. Rebuild and the icons will load automatically

### Customizing the Header

1. Edit `packages/design-system/src/components/DashboardHeader.tsx`
2. Add or modify props in the component interface
3. Rebuild the design-system
4. Use the new props in your app

## Troubleshooting

### Dependencies Not Found

If you see "Cannot find module" errors:
```bash
npm install
cd packages/design-system && npm run build
cd ../modules/module-header && npm run build
```

### Icons Not Showing

Make sure:
1. The @a/elements package is in the correct location
2. The icon registry is initialized
3. SVG files exist in `apps/app/public/icons/`

### Build Errors

Clear the build caches and rebuild:
```bash
rm -rf apps/app/dist modules/*/dist packages/*/dist
npm run build
```

## Next Steps

- Customize themes to match your brand
- Add more components to the design system
- Create additional modules
- Build your application features
- Deploy to production

## Support

For issues or questions:
- Check the README.md files in each package
- Review the TypeScript types for API documentation
- Examine example usage in `apps/app/src/App.tsx`
