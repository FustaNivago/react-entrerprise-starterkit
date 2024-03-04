import type { Meta, StoryObj } from '@storybook/react';

import LoaderComponent from './LoaderComponent';

const meta = {
  title: 'shared/components/LoaderComponent',
  component: LoaderComponent,
} satisfies Meta<typeof LoaderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <LoaderComponent />,
};
