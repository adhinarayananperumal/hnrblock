import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontentexpComponent } from './ngcontentexp.component';

describe('NgcontentexpComponent', () => {
  let component: NgcontentexpComponent;
  let fixture: ComponentFixture<NgcontentexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgcontentexpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcontentexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
