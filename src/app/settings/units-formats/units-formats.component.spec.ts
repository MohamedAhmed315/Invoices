import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsFormatsComponent } from './units-formats.component';

describe('UnitsFormatsComponent', () => {
  let component: UnitsFormatsComponent;
  let fixture: ComponentFixture<UnitsFormatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitsFormatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitsFormatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
