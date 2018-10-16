import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleheaderComponent } from './titleheader/titleheader.component';
import { ProjectselectorComponent } from './projectselector/projectselector.component';
import { DropdownModule } from 'primeng/dropdown';
import { DbAccess } from '../repository/dbaccess';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    DbAccess
  ],
  exports: [TitleheaderComponent],
  declarations: [TitleheaderComponent, ProjectselectorComponent]
})
export class MainMenuModule { }
