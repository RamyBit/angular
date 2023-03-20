import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QListItemComponent } from './q-list-item.component';

describe('QListItemComponent', () => {
  let component: QListItemComponent;
  let fixture: ComponentFixture<QListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
