import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CreateTaskBarComponent } from './components/create-task-bar/create-task-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskCardComponent } from './components/task-card/task-card.component';

@NgModule({
  declarations: [HeaderComponent, CreateTaskBarComponent, TaskCardComponent],
  exports: [HeaderComponent, TaskCardComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
