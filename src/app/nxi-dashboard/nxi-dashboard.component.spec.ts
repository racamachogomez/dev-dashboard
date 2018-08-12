import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NXIDashboardComponent } from './nxi-dashboard.component';

describe('NXIDashboardComponent', () => {
  let component: NXIDashboardComponent;
  let fixture: ComponentFixture<NXIDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NXIDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NXIDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
