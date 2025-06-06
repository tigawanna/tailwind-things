# Tailwind Things 🎨

A collection of powerful Tailwind CSS components and utilities for managing CSS variables, colors, and themes in your web applications. Supports both shadcn and daisyUI themes.

[![npm version](https://img.shields.io/npm/v/tailwind-things.svg)](https://www.npmjs.com/package/tailwind-things)
[![License](https://img.shields.io/npm/l/tailwind-things.svg)](https://github.com/tigawanna/tailwind-things/blob/main/LICENSE)

## Features

- 🎨 Visual CSS variables editor with color picker
- 🌓 Light and dark mode support
- 🔄 Real-time theme previewing
- 📤 Theme export functionality (daisyUI format)
- 🧩 Support for both shadcn and daisyUI theme systems
- 🚀 Lightweight and easy to integrate

## Installation

```sh
# npm
npm install tailwind-things

# yarn
yarn add tailwind-things

# pnpm
pnpm add tailwind-things
```

## Quick Start

### 1. Import the CSS

```tsx
import "tailwind-things/styles.css";
```

### 2. Add the DevTools Component

```tsx
import { CssVariablesDevtools } from "tailwind-things";

function App() {
  return (
    <div>
      <h1>My App</h1>
      {/* The DevTools component only renders in development mode */}
      <CssVariablesDevtools />
    </div>
  );
}
```

## CSS Variables DevTools

The `CssVariablesDevtools` component provides a floating UI for inspecting and editing CSS variables in your application. It automatically detects variables related to shadcn and daisyUI themes.

### Props

```tsx
interface CssVariablesDevtoolsProps {
  // Optional filter function to display only certain variables
  filter?: (variable: [string, string]) => boolean;
  
  // Optional click handler for variables
  onClick?: (name: string, value: string) => void;
  
  // Control the position and size of the trigger button
  trigger?: {
    variant?: "top" | "bottom" | "left" | "right";
    size?: "sm" | "md" | "lg";
  };
  
  // Additional classes for styling
  className?: string;
}
```

### Usage Examples

#### Custom Filtering

```tsx
<CssVariablesDevtools 
  filter={(variable) => variable[0].includes("--color")} 
  trigger={{ variant: "bottom", size: "lg" }}
/>
```

#### Custom Click Handler

```tsx
<CssVariablesDevtools 
  onClick={(name, value) => console.log(`Selected ${name}: ${value}`)} 
/>
```

## Screenshots

### CSS Variable List View
![CSS Variable List View](https://github.com/tigawanna/tailwind-things/raw/main/docs/variables-list-view.png)

### CSS Variable Edit View
![CSS Variable Edit View](https://github.com/tigawanna/tailwind-things/raw/main/docs/variable-edit-view.png)

## Theming Systems

Tailwind Things supports multiple theming systems:

### Supported Theme Types

- **shadcn**: Integrates with the shadcn/ui theming system
- **daisyUI**: Compatible with daisyUI's theme variables
- **all**: Displays all CSS variables (default)

### Theme Context

The library provides a theme context that you can use in your application:

```tsx
import { useContext } from 'react';
import { ThemeContext } from "tailwind-things";

function MyComponent() {
  const { 
    themes,         // all CSS variables
    themeType,      // current theme type
    setThemeType,   // function to change theme type
    darkMode,       // boolean indicating dark mode state
    toggledarkMode  // function to toggle dark mode
  } = useContext(ThemeContext);
  
  // Use theme data in your component
  return (
    <div>
      <button onClick={() => toggledarkMode(!darkMode)}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
      
      <select 
        value={themeType}
        onChange={(e) => setThemeType(e.target.value as any)}
      >
        <option value="all">All Variables</option>
        <option value="shadcn">shadcn Theme</option>
        <option value="daisyui">daisyUI Theme</option>
      </select>
    </div>
  );
}
```

## Color Utilities

The library includes utilities for working with different color spaces, including OKLCH (used by modern browsers for more perceptually uniform colors):

```tsx
import { oklchToHSL, hslToOklch } from 'tailwind-things';

// Convert OKLCH color to HSL
const hsl = oklchToHSL('oklch(0.6 0.2 240)');
console.log(hsl.hsl_string); // "hsl(240, 50%, 60%)"

// Convert HSL to OKLCH
const oklch = hslToOklch('hsl(240, 50%, 60%)');
console.log(oklch.oklch_string); // "0.6 0.2 240"
```

## Exporting Themes

You can use the built-in export functionality to save your themes:

### DaisyUI Theme Export

```tsx
import { ExportAsDaisyui } from "tailwind-things";

function ThemeExporter() {
  return (
    <div>
      <h2>Export as DaisyUI Theme</h2>
      <ExportAsDaisyui />
    </div>
  );
}
```

## Usage in a TailwindCSS Project

1. Install the package
2. Configure your TailwindCSS setup
3. Import the CSS
4. Add the DevTools component to your layout

```tsx
// In your layout component
import { CssVariablesDevtools } from "tailwind-things";
import "tailwind-things/styles.css";

export default function Layout({ children }) {
  return (
    <div className="app">
      {children}
      <CssVariablesDevtools />
    </div>
  );
}
```

## Advanced Usage

### Utilities

You can also use the provided utilities directly:

```tsx
import { listAllCssVariables } from "tailwind-things";

// Get all CSS variables in the document
const variables = listAllCssVariables();
console.log(variables); // [["--primary", "oklch(0.6 0.2 240)"], ...]
```

### Tailwind Helpers

```tsx
import { getShadcnTailwindBg, getDaisyuiTailwindBg } from "tailwind-things";

// Get Tailwind classes for a shadcn variable
const shadcnClasses = getShadcnTailwindBg('--primary');
console.log(shadcnClasses); 
// { bg: 'bg-primary', bg_muted: 'bg-primary/20', content: 'text-primary-foreground' }

// Get Tailwind classes for a daisyUI variable
const daisyuiClasses = getDaisyuiTailwindBg('primary');
console.log(daisyuiClasses);
// { bg: 'bg-primary', bg_muted: 'bg-primary/20', content: 'text-primary-content' }
```

## Browser Support

Tailwind Things works in all modern browsers that support CSS Variables and CSS Color Module Level 4 (OKLCH color space).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.


