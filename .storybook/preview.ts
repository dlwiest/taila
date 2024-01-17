import type { Preview } from "@storybook/react";
import '../src/tailwind.css';
import './preview.css';

const preview: Preview = {
  globalTypes: {
    darkMode: {
      defaultValue: false, // Enable dark mode by default on all stories
    },
    // Optional (Default: 'dark')
    className: {
      defaultValue: 'dark',
    },
  },
  parameters: {
    darkMode: {
      stylePreview: false,
      darkClass: 'dark',
      lightClass: 'light',
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
