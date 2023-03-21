import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QDetailsComponent } from './q-details.component';

describe('QDetailsComponent', () => {
  let component: QDetailsComponent;
  let fixture: ComponentFixture<QDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
