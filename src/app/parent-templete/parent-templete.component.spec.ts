import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTempleteComponent } from './parent-templete.component';

describe('ParentTempleteComponent', () => {
  let component: ParentTempleteComponent;
  let fixture: ComponentFixture<ParentTempleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentTempleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTempleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
