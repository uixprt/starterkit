#!/bin/bash

echo "🚀 Starter Kit Setup"
echo "===================="
echo ""

# Check if pnpm is installed
if command -v pnpm &> /dev/null; then
    echo "✓ pnpm detected"
    PKG_MANAGER="pnpm"
elif command -v npm &> /dev/null; then
    echo "✓ npm detected"
    PKG_MANAGER="npm"
else
    echo "❌ Neither pnpm nor npm found. Please install Node.js."
    exit 1
fi

echo ""
echo "📦 Installing dependencies..."
$PKG_MANAGER install

echo ""
echo "🔨 Building packages..."
cd packages/design-system && $PKG_MANAGER run build && cd ../..
cd modules/module-header && $PKG_MANAGER run build && cd ../..

echo ""
echo "✅ Setup complete!"
echo ""
echo "To start the development server:"
echo "  $PKG_MANAGER run dev"
echo ""
echo "To build all packages:"
echo "  $PKG_MANAGER run build"
echo ""
