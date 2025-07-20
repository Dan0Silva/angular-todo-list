import { Component } from '@angular/core';
import { TodoService } from '../../core/services/todo/todo.service';
import Task from '../../core/interfaces/task';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  tasks: Task[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.tasks = this.todoService.read();
  }
}
