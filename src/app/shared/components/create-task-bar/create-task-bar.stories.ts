import { Meta, StoryObj } from '@storybook/angular';
import { CreateTaskBarComponent } from './create-task-bar.component';

const meta: Meta<CreateTaskBarComponent> = {
  title: 'components/CreateTaskBar',
  component: CreateTaskBarComponent,
};
export default meta;

type Story = StoryObj<CreateTaskBarComponent>;

export const Default: Story = {};
