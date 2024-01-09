import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubItemModalComponent } from './sub-item-modal.component';

describe('SubItemModalComponent', () => {
  let component: SubItemModalComponent;
  let fixture: ComponentFixture<SubItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubItemModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
