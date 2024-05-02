import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesdistComponent } from './mesdist.component';

describe('MesdistComponent', () => {
  let component: MesdistComponent;
  let fixture: ComponentFixture<MesdistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesdistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesdistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
