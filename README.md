# Starter Kit

A monorepo starter kit with React, Vite, TypeScript, Material-UI, and modular architecture.

🚀 **Live Demo:** [starter.uixprt.com](https://starter.uixprt.com)

## Structure

```
starterkit/
├── apps/
│   └── app/                    # React application
├── modules/
│   └── module-header/          # Header module wrapper
├── packages/
│   └── design-system/          # MUI-based design system
└── elements/                   # Web components (@uixprt/elements)
```

## Features

- **Monorepo with npm/pnpm workspaces** - Manage multiple packages easily
- **React 18 + Vite** - Fast development with HMR
- **TypeScript** - Type-safe development
- **Material-UI v5** - Complete UI component library
- **Theme System** - Light and dark themes with icon registry
- **Web Components** - Custom SVG icon component from @uixprt/elements
- **Modular Architecture** - Reusable modules and packages

## Quick Start

### Installation

```bash
# Using npm
npm install

# Using pnpm (recommended)
pnpm install
```

### Development

Start the development server:

```bash
npm run dev
# or
pnpm dev
```

The app will open at http://localhost:3000

### Building

Build all packages:

```bash
npm run build
# or
pnpm build
```

### Packing

Create npm packages for distribution:

```bash
npm run pack:all
# or
pnpm pack:all
```

This will create `.tgz` files in each package directory.

## Package Details

### @a/design-system

Design system package with Material-UI components:

- Dashboard header component
- Two themes (light/dark)
- Icon registry with theme-specific logos
- Integration with @uixprt/elements svg component

**Location:** `packages/design-system/`

### @a/module-header

Module wrapper for the design system header:

- Simplified API for applications
- Theme management
- Re-exports design system utilities

**Location:** `modules/module-header/`

### @a/app

React application demonstrating the use of all packages:

- Vite + React 18 + TypeScript
- Uses @a/module-header
- Theme switcher
- Example usage of web components

**Location:** `apps/app/`

## Development Workflow

### Working on Packages

1. Make changes in `packages/design-system/`
2. The app will automatically pick up changes via workspace links
3. Build the package: `cd packages/design-system && npm run build`

### Working on Modules

1. Make changes in `modules/module-header/`
2. Build the module: `cd modules/module-header && npm run build`
3. The app will use the updated module

### Working on the App

1. Make changes in `apps/app/`
2. Changes are immediately reflected via Vite HMR
3. Build for production: `cd apps/app && npm run build`

## Scripts

### Root Level

- `npm run dev` - Start the app in development mode
- `npm run build` - Build all packages and the app
- `npm run pack:all` - Create distributable packages

### Package Level

Each package has:

- `npm run dev` - Watch mode (libraries) or dev server (app)
- `npm run build` - Production build
- `npm run pack` - Create .tgz package

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Material-UI v5** - Component library
- **Emotion** - CSS-in-JS
- **Web Components** - Custom elements from @uixprt/elements

## Icon System

The design system includes an icon registry that loads theme-specific logos:

- Light theme: Blue logo variants
- Dark theme: Light blue logo variants
- Icons are loaded via @uixprt/elements svg web component
- Each theme automatically switches logos

## Deployment

This starter kit is configured to deploy automatically to GitHub Pages.

### Setup

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Set Source to "GitHub Actions"
4. Configure your DNS:
   - Add CNAME record: `starter.uixprt.com` → `<username>.github.io`
   - Or use default: `<username>.github.io/<repo-name>`

### Automatic Deployment

- Deploys on every push to `main` branch
- Workflow file: `.github/workflows/deploy.yml`
- Builds the app and deploys to GitHub Pages
- CNAME file configured for custom domain: `starter.uixprt.com`

### Manual Deployment

Trigger deployment manually from Actions tab or run:

```bash
npm run build
# Deploy the apps/app/dist folder to your hosting
```

## Publishing @uixprt/elements to npm

If you want to publish the web components package to npm registry:

```bash
cd ../elements
npm version patch  # or minor/major
npm publish

# Or publish to a private registry/artifactory
npm publish --registry https://your-registry.com
```

Then update `package.json` dependencies to use the published version instead of local file links.

## License

MIT
