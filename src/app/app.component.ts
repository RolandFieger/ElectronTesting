import { Component, Input, NgModule } from '@angular/core';
import { PrimengLocalizations } from './models/de.model';
import { TitleheaderComponent } from './main-menu/titleheader/titleheader.component';
import { ProjectselectorComponent } from './main-menu/projectselector/projectselector.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RFITodo';
  dateValue: Date;

  @Input()
  local = new PrimengLocalizations();
}

