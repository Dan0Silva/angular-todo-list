import { Meta, StoryObj } from '@storybook/angular';
import { TaskCardComponent } from './task-card.component';

const meta: Meta<TaskCardComponent> = {
  title: 'components/TaskCard',
  component: TaskCardComponent,
};

export default meta;

type Story = StoryObj<TaskCardComponent>;

export const Default: Story = {
  args: {
    task: {
      id: 0,
      description: 'Exemplo de task',
      status: false,
    },
  },
};
