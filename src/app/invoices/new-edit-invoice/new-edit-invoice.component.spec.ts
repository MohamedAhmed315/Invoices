import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditInvoiceComponent } from './new-edit-invoice.component';

describe('NewEditInvoiceComponent', () => {
  let component: NewEditInvoiceComponent;
  let fixture: ComponentFixture<NewEditInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEditInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEditInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
