import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectselectorComponent } from './projectselector.component';

describe('ProjectselectorComponent', () => {
  let component: ProjectselectorComponent;
  let fixture: ComponentFixture<ProjectselectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectselectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
