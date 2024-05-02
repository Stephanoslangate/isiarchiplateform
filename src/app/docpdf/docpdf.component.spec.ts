import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocpdfComponent } from './docpdf.component';

describe('DocpdfComponent', () => {
  let component: DocpdfComponent;
  let fixture: ComponentFixture<DocpdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocpdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
