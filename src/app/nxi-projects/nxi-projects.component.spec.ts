import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NXIProjectsComponent } from './nxi-projects.component';

describe('NXIProjectsComponent', () => {
  let component: NXIProjectsComponent;
  let fixture: ComponentFixture<NXIProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NXIProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NXIProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
