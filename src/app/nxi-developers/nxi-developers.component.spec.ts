import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NXIDevelopersComponent } from './nxi-developers.component';

describe('NXIDevelopersComponent', () => {
  let component: NXIDevelopersComponent;
  let fixture: ComponentFixture<NXIDevelopersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NXIDevelopersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NXIDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
