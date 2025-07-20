import { Injectable } from '@angular/core';
import Task from '../../interfaces/task';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly API_URL = 'http://localhost:3000/tasks';
  // private taskList: Task[] = [];
  private taskSubject = new BehaviorSubject<Task[]>([]);
  task$: Observable<Task[]> = this.taskSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchTasks();
  }

  private fetchTasks(): void {
    this.http.get<Task[]>(this.API_URL).subscribe((tasks) => {
      this.taskSubject.next(tasks);
    });
  }

  getTasks(): Task[] {
    return this.taskSubject.getValue();
  }

  create(description: string): void {
    const newTask: Omit<Task, 'id'> = {
      description: description,
      status: false,
    };

    this.http.post<Task>(this.API_URL, newTask).subscribe(() => {
      this.fetchTasks();
    });

    // this.emitTaskList();
    // this.saveTasksInLocalStorage(this.taskList);
  }

  delete(id: number): void {
    this.http.delete(`${this.API_URL}/${id}`).subscribe(() => {
      this.fetchTasks();
    });
  }

  toggleTask(id: number): void {
    const task = this.getTasks().find((t) => t.id === id);
    if (!task) return;

    const updatedTask = { ...task, status: !task.status };
    this.http.patch(`${this.API_URL}/${id}`, updatedTask).subscribe(() => {
      this.fetchTasks();
    });
  }

  // private loadTasksInLocalStorage(): Task[] {
  //   const data = localStorage.getItem(this.STORAGE_KEY);
  //   return data ? JSON.parse(data) : [];
  // }

  // private saveTasksInLocalStorage(tasks: Task[]) {
  //   localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
  // }

  // private emitTaskList(): void {
  //   this.taskSubject.next([...this.taskList]);
  // }
}
