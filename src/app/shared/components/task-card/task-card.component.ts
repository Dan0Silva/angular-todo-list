import { Component, Input } from '@angular/core';
import Task from '../../../core/interfaces/task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  @Input() task!: Task;

  ngOnInit() {
    this.task = {
      id: 1,
      description: 'Lavar as vasilhas e limpar a casa',
      status: false,
    };
  }

  toggleCheckbox() {
    // const isChecked = (event.target as HTMLInputElement).checked;
    this.task.status = !this.task.status;
  }
}
