import type { Meta, StoryObj } from '@storybook/react';

import LoginPage from './LoginPage';

const meta = {
  title: 'shared/pages/LoginPage',
  component: LoginPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  // parameters: {
  //   // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
  //   layout: 'fullscreen',
  // },
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <LoginPage />,
};

// export const LoggedIn: Story = {
//   args: {
//     user: {
//       name: 'Jane Doe',
//     },
//   },
// };

// export const LoggedOut: Story = {};
