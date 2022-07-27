import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleActualComponent } from './ng-style-actual.component';

describe('NgStyleActualComponent', () => {
  let component: NgStyleActualComponent;
  let fixture: ComponentFixture<NgStyleActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgStyleActualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
