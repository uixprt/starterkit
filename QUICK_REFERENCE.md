# Quick Reference

Common commands and tasks for the Starter Kit.

## Installation

```bash
# Quick setup
./setup.sh

# Manual
npm install
```

## Development

```bash
# Start the app
npm run dev

# Watch mode for packages
cd packages/design-system && npm run dev
cd modules/module-header && npm run dev
```

## Building

```bash
# Build everything
npm run build

# Build specific package
cd packages/design-system && npm run build
cd modules/module-header && npm run build
cd apps/app && npm run build
```

## Package Management

```bash
# Create distributable packages
npm run pack:all

# Pack individual package
cd packages/design-system && npm pack
```

## Common File Locations

| What | Where |
|------|-------|
| Add theme | `packages/design-system/src/themes/index.ts` |
| Modify header | `packages/design-system/src/components/DashboardHeader.tsx` |
| Add icons | `packages/design-system/src/icon-registry.ts` |
| App entry | `apps/app/src/main.tsx` |
| App component | `apps/app/src/App.tsx` |
| Logo files | `apps/app/public/icons/` |

## Key Concepts

### Workspaces

The monorepo uses npm/pnpm workspaces. Packages reference each other via `file:` protocol.

### Dependencies

- `@a/design-system` → MUI + themes + components
- `@a/module-header` → wraps design-system header
- `@a/app` → uses module-header
- All → use `@a/elements` for svg web component

### Build Order

1. `@a/design-system` (no dependencies)
2. `@a/module-header` (depends on design-system)
3. `@a/app` (depends on module-header)

### Themes

- Two themes: `light` and `dark`
- Switch via header button
- Each theme loads different logos
- Icons managed by IconRegistry

## TypeScript

All packages use TypeScript with strict mode. Types are exported from each package's `index.ts`.

## Vite

- Used for building libraries (design-system, module-header)
- Used as dev server for the app
- HMR enabled for development
- Tree-shaking in production builds

## Icon System

```tsx
// Using a-svg web component
<a-svg name="star" size="32" color="gold" />

// Using SvgIcon wrapper
import { SvgIcon } from '@a/design-system';
<SvgIcon src="/path/to/icon.svg" size="32" />
```

## Common Issues

**Module not found**
→ Run `npm install` and rebuild packages

**Icons not visible**
→ Check icon registry initialization and SVG file paths

**Theme not switching**
→ Verify iconRegistry.registerThemeIcons() is called on theme change

**Types not updating**
→ Rebuild the package: `cd <package> && npm run build`
