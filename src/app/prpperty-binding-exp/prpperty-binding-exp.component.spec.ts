import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrppertyBindingExpComponent } from './prpperty-binding-exp.component';

describe('PrppertyBindingExpComponent', () => {
  let component: PrppertyBindingExpComponent;
  let fixture: ComponentFixture<PrppertyBindingExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrppertyBindingExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrppertyBindingExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
