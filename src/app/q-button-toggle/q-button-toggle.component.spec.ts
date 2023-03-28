import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QButtonToggleComponent } from './q-button-toggle.component';

describe('QButtonToggleComponent', () => {
  let component: QButtonToggleComponent;
  let fixture: ComponentFixture<QButtonToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QButtonToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QButtonToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
