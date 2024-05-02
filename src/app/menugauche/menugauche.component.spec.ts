import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenugaucheComponent } from './menugauche.component';

describe('MenugaucheComponent', () => {
  let component: MenugaucheComponent;
  let fixture: ComponentFixture<MenugaucheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenugaucheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenugaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
