import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonaContactComponent } from './nona-contact.component';

describe('NonaContactComponent', () => {
  let component: NonaContactComponent;
  let fixture: ComponentFixture<NonaContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonaContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonaContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
