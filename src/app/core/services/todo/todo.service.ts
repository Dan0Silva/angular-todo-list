import { Injectable } from '@angular/core';
import Task from '../../interfaces/task';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private taskList: Task[] = [];
  private taskSubject = new BehaviorSubject<Task[]>([]);

  task$: Observable<Task[]> = this.taskSubject.asObservable();

  constructor() {}

  create(description: string): void {
    const newTask: Task = {
      id: this.taskList.length,
      description: description,
      status: false,
    };
    this.taskList = [...this.taskList, newTask];
    this.taskSubject.next([...this.taskList]);
  }

  delete(idToRemove: number): void {
    this.taskList = this.taskList.filter((item) => item.id !== idToRemove);
    this.taskSubject.next([...this.taskList]);
  }

  toggleTask(id: number): void {
    this.taskList = this.taskList.map((task) =>
      task.id === id ? { ...task, concluida: !task.status } : task
    );
    this.taskSubject.next([...this.taskList]);
  }
}
