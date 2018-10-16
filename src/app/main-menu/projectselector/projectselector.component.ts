import { Component, OnInit, Input, NgModule, ChangeDetectorRef } from '@angular/core';
import { SelectItem} from 'primeng/api';
import { DbAccess } from '../../repository/dbaccess';

@Component({
  selector: 'app-projectselector',
  templateUrl: './projectselector.component.html',
  styleUrls: ['./projectselector.component.css']
})
export class ProjectselectorComponent implements OnInit {

  projects: SelectItem[];
  list: Array<string>;
  dbAccess = new DbAccess();

  constructor() {
    this.projects = [
      {label: 'Testprojekt 1', value: {id: 0, name: 'Testprojekt1', code: 'TP1'}},
      {label: 'Testprojekt 2', value: {id: 0, name: 'Testprojekt2', code: 'TP2'}}
    ];
    this.dbAccess.createName();
  }

  ngOnInit() {

  }

}
