import type { Meta, StoryObj } from '@storybook/react';

import ErrorFallback from './ErrorFallback';

const meta = {
  title: 'shared/components/ErrorFallback',
  component: ErrorFallback,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  // parameters: {
  //   // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
  //   layout: 'fullscreen',
  // },
} satisfies Meta<typeof ErrorFallback>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <ErrorFallback />,
};

// export const LoggedIn: Story = {
//   args: {
//     user: {
//       name: 'Jane Doe',
//     },
//   },
// };

// export const LoggedOut: Story = {};
