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
    this.todoService.toggleTask(this.task.id);
  }

  deleteTask() {
    this.todoService.delete(this.task.id);
  }
}
