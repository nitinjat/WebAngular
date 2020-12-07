import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackfooterComponent } from './backfooter.component';

describe('BackfooterComponent', () => {
  let component: BackfooterComponent;
  let fixture: ComponentFixture<BackfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
