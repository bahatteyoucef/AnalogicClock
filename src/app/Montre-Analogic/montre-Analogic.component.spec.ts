import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontreAnalogicComponent } from './montre-Analogic.component';

describe('MontreAnalogicComponent', () => {
  let component: MontreAnalogicComponent;
  let fixture: ComponentFixture<MontreAnalogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontreAnalogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontreAnalogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
