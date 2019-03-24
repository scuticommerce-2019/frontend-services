import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorefooterComponent } from './storefooter.component';

describe('StorefooterComponent', () => {
  let component: StorefooterComponent;
  let fixture: ComponentFixture<StorefooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorefooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
