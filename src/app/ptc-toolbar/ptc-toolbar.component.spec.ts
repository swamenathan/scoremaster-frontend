import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtcToolbarComponent } from './ptc-toolbar.component';

describe('PtcToolbarComponent', () => {
  let component: PtcToolbarComponent;
  let fixture: ComponentFixture<PtcToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtcToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtcToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
