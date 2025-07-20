import { Component, Input } from '@angular/core';
import Task from '../../../core/interfaces/task';
import { TodoService } from '../../../core/services/todo/todo.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  @Input() task!: Task;

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  toggleCheckbox() {
    // const isChecked = (event.target as HTMLInputElement).checked;
    this.task.status = !this.task.status;
  }

  deleteTask() {
    this.todoService.delete(this.task.id);
  }
}
