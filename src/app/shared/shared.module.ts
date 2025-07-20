import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskCardComponent } from './components/task-card/task-card.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    SearchBarComponent,
    TaskCardComponent,
  ],
  exports: [HeaderComponent, TaskCardComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
