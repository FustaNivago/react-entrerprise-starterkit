import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../src/app/shared/lib/storyBook/StyleDecorator';
import { ThemeDecorator } from '../src/app/shared/lib/storyBook/ThemeDecorator';
import { RouterDecorator } from '../src/app/shared/lib/storyBook/RouterDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator, RouterDecorator],
};

export default preview;
