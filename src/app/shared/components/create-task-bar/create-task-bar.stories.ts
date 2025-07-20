import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { CreateTaskBarComponent } from './create-task-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../../../core/services/todo/todo.service';
import { HttpClientModule } from '@angular/common/http';

const meta: Meta<CreateTaskBarComponent> = {
  title: 'components/CreateTaskBar',
  component: CreateTaskBarComponent,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
      providers: [{ provide: TodoService }],
    }),
  ],
};
export default meta;

type Story = StoryObj<CreateTaskBarComponent>;

export const Default: Story = {};
