import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TaskListComponent } from './task-list.component';
import { SharedModule } from '../../shared.module';
import { TodoService } from '../../../core/services/todo/todo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const meta: Meta<TaskListComponent> = {
  title: 'components/TaskList',
  component: TaskListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
      ],
      providers: [{ provide: TodoService }],
    }),
  ],
};
export default meta;

type Story = StoryObj<TaskListComponent>;

export const Default: Story = {
  args: {
    tasks: [
      { id: 111, description: 'exemplo de task 1', status: false },
      { id: 222, description: 'exemplo de task 2', status: true },
    ],
  },
};
