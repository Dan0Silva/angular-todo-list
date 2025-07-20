import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TaskCardComponent } from './task-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TodoService } from '../../../core/services/todo/todo.service';

const meta: Meta<TaskCardComponent> = {
  title: 'components/TaskCard',
  component: TaskCardComponent,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
      providers: [{ provide: TodoService }],
    }),
  ],
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
