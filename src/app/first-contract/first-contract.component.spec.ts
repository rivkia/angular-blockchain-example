import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstContractComponent } from './first-contract.component';

describe('FirstContractComponent', () => {
  let component: FirstContractComponent;
  let fixture: ComponentFixture<FirstContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
