import { Injectable } from '@angular/core';
import Task from '../../interfaces/task';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly STORAGE_KEY = 'todo-list';
  private taskList: Task[] = [];
  private taskSubject = new BehaviorSubject<Task[]>(
    this.loadTasksInLocalStorage()
  );

  task$: Observable<Task[]> = this.taskSubject.asObservable();

  constructor() {}

  getTasks(): Task[] {
    return this.taskSubject.getValue();
  }

  create(description: string): void {
    const newTask: Task = {
      id: this.taskList.length,
      description: description,
      status: false,
    };
    this.taskList = [...this.taskList, newTask];

    this.emitTaskList();
    this.saveTasksInLocalStorage(this.taskList);
  }

  delete(idToRemove: number): void {
    const task = this.taskList.find((t) => t.id === idToRemove);
    if (task) {
      this.taskList = this.taskList.filter((item) => item.id !== task.id);

      this.emitTaskList();
      this.saveTasksInLocalStorage(this.taskList);
    }
  }

  toggleTask(id: number): void {
    const task = this.taskList.find((t) => t.id === id);
    if (task) {
      task.status = !task.status;

      this.emitTaskList();
      this.saveTasksInLocalStorage(this.taskList);
    }
    console.log(this.taskList);
  }

  private loadTasksInLocalStorage(): Task[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  private saveTasksInLocalStorage(tasks: Task[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
  }

  private emitTaskList(): void {
    this.taskSubject.next([...this.taskList]);
  }
}
