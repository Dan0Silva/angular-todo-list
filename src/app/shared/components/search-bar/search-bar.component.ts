import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../../../core/services/todo/todo.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  search = new FormControl();

  constructor(private todoService: TodoService) {}

  searchTerm() {
    const description = this.search.value.trim();
    if (description.length > 3) {
      this.todoService.create(description);
      this.search.setValue('');
    }
  }
}
