import { Component, Input } from '@angular/core';
import Task from '../../../core/interfaces/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
}
