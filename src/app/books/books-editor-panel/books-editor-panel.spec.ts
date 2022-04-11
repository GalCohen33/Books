import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksEditorPanel } from './books-editor-panel';

describe('EditRepositoryComponent', () => {
  let component: BooksEditorPanel;
  let fixture: ComponentFixture<BooksEditorPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksEditorPanel ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksEditorPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
