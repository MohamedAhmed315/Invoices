import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewExpenseComponent } from './preview-expense.component';

describe('PreviewExpenseComponent', () => {
  let component: PreviewExpenseComponent;
  let fixture: ComponentFixture<PreviewExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewExpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
