# Taila Component Library

## Introduction

**Taila** is a React component library that builds upon [React Aria](https://react-spectrum.adobe.com/react-aria/), integrating it with [Tailwind CSS](https://tailwindcss.com/) to create accessible, stylish components for rapid prototyping. Taila makes it easy to include beautiful, accessible components in your React projects with minimal effort.

## Installation

To use Taila in your project, you must have Tailwind CSS installed, as well as @tailwindcss/forms and tailwindcss-react-aria-components. You will also need tailwindcss-animate if you want animations.

To install Taila, run:

```bash
npm install @dlwiest/taila
```

### Updating `tailwind.config.js`

After installation, you need to add Taila to the `content` array in your `tailwind.config.js` file:

```javascript
module.exports = {
  // ... other configurations ...

  content: [
    "./node_modules/@dlwiest/taila/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // other paths...
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-react-aria-components'),
    require('tailwindcss-animate') // Needed for animations
    // other plugins...
  ],
};
```

This ensures Tailwind correctly applies its styling to Taila components.

## Usage

Here's how you can use the components in Taila. As we add more components, we will update this section with more examples.

### Button

The Button component is a basic component in Taila. It accepts a `color` prop to style the button with Tailwind's color classes.

Example:

```jsx
import { Button } from '@dlwiest/taila';

<Button color="indigo">Push Me</Button>
```

This will render a button styled with Tailwind's indigo color classes.

### Customizing Components

Taila components are designed with customization in mind. You can easily override the default styling by adding additional class names to the `className` prop of any Taila component. This allows you to use Tailwind CSS utility classes to modify the appearance and behavior of the components as needed.

Example:
```jsx
import { Button } from '@dlwiest/taila';

<Button className="bg-red-500 hover:bg-red-700">Alert</Button>
```

In this example, the `Button` component's default background color styling is overridden with background color classes from Tailwind CSS.

## Dependencies

- Tailwind CSS

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under [MIT License](LICENSE.md).

## Contact

If you have any questions or suggestions, feel free to open an issue in the GitHub repository.