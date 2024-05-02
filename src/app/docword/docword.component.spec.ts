import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocwordComponent } from './docword.component';

describe('DocwordComponent', () => {
  let component: DocwordComponent;
  let fixture: ComponentFixture<DocwordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocwordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
