import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../../../core/services/todo/todo.service';

@Component({
  selector: 'app-create-task-bar',
  templateUrl: './create-task-bar.component.html',
  styleUrl: './create-task-bar.component.scss',
})
export class CreateTaskBarComponent {
  taskDescription = new FormControl();

  constructor(private todoService: TodoService) {}

  createTask() {
    const description = this.taskDescription.value.trim();
    if (description.length > 3) {
      this.todoService.create(description);
      this.taskDescription.setValue('');
    }
  }
}
