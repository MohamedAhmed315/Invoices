import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSummaryComponent } from './log-summary.component';

describe('LogSummaryComponent', () => {
  let component: LogSummaryComponent;
  let fixture: ComponentFixture<LogSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
