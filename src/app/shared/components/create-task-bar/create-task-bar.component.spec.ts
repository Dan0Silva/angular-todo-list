import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaskBarComponent } from './create-task-bar.component';

describe('CreateTaskBarComponent', () => {
  let component: CreateTaskBarComponent;
  let fixture: ComponentFixture<CreateTaskBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTaskBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateTaskBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
