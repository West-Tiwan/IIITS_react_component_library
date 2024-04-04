import 'minireset.css';
//css var() not working in other files,
import '../src/styles/tokens.css';
import '../src/styles/global.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
