import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesSummaryComponent } from './invoices-summary.component';

describe('InvoicesSummaryComponent', () => {
  let component: InvoicesSummaryComponent;
  let fixture: ComponentFixture<InvoicesSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
