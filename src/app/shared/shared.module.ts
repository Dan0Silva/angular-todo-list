import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CreateTaskBarComponent } from './components/create-task-bar/create-task-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { NoContentComponent } from './components/no-content/no-content.component';
import { LoadSpinnerComponent } from './components/load-spinner/load-spinner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CreateTaskBarComponent,
    TaskCardComponent,
    TaskListComponent,
    NoContentComponent,
    LoadSpinnerComponent,
  ],
  exports: [
    HeaderComponent,
    TaskCardComponent,
    TaskListComponent,
    NoContentComponent,
    LoadSpinnerComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
