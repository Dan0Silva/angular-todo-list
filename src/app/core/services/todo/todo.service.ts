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
    this.emitTaskList();
  }

  delete(idToRemove: number): void {
    this.taskList = this.taskList.filter((item) => item.id !== idToRemove);
    this.emitTaskList();
  }

  toggleTask(id: number): void {
    const task = this.taskList.find((t) => t.id === id);
    if (task) {
      task.status = !task.status;
      this.emitTaskList();
    }
    console.log(this.taskList);
  }

  private emitTaskList(): void {
    this.taskSubject.next([...this.taskList]);
  }
}
