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
  isLoading: boolean = true;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.task$.subscribe({
      next: (data) => {
        this.tasks = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }
}
