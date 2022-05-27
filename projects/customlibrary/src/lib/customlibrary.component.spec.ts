import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomlibraryComponent } from './customlibrary.component';

describe('CustomlibraryComponent', () => {
  let component: CustomlibraryComponent;
  let fixture: ComponentFixture<CustomlibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomlibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomlibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
