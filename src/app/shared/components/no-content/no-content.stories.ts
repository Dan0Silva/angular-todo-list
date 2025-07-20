import { Meta, StoryObj } from '@storybook/angular';
import { NoContentComponent } from './no-content.component';

const meta: Meta<NoContentComponent> = {
  title: 'components/NoContent',
  component: NoContentComponent,
};
export default meta;

type Story = StoryObj<NoContentComponent>;

export const Default: Story = {};
