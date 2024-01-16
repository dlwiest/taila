# Taila Component Library

## Introduction

**Taila** is a React component library that builds upon [React Aria](https://react-spectrum.adobe.com/react-aria/), integrating it with [Tailwind CSS](https://tailwindcss.com/) to create accessible, stylish components for rapid prototyping. Taila makes it easy to include beautiful, accessible components in your React projects with minimal effort.

## Installation

To use Taila in your project, you must have Tailwind CSS installed.

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

## Dependencies

- Tailwind CSS

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under [MIT License](LICENSE.md).

## Contact

If you have any questions or suggestions, feel free to open an issue in the GitHub repository.