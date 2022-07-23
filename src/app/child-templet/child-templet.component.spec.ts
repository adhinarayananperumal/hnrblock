import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTempletComponent } from './child-templet.component';

describe('ChildTempletComponent', () => {
  let component: ChildTempletComponent;
  let fixture: ComponentFixture<ChildTempletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTempletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTempletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
