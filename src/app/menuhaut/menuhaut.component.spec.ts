import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuhautComponent } from './menuhaut.component';

describe('MenuhautComponent', () => {
  let component: MenuhautComponent;
  let fixture: ComponentFixture<MenuhautComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuhautComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuhautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
