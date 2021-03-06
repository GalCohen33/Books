import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDisplayComponent } from './book-display.component';

describe('BookEditComponent', () => {
  let component: BookDisplayComponent;
  let fixture: ComponentFixture<BookDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
