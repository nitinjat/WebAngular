import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackheaderComponent } from './backheader.component';

describe('BackheaderComponent', () => {
  let component: BackheaderComponent;
  let fixture: ComponentFixture<BackheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
