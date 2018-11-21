import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetSelectComponent } from './street-select.component';

describe('StreetSelectComponent', () => {
  let component: StreetSelectComponent;
  let fixture: ComponentFixture<StreetSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
