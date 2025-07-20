import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { SharedModule } from '../../shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from '../../../core/services/todo/todo.service';

const meta: Meta<HeaderComponent> = {
  title: 'components/Header',
  component: HeaderComponent,
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

type Story = StoryObj<HeaderComponent>;

export const Default: Story = {};
