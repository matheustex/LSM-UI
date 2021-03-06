import { Department } from './../shared/models/department';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService extends GenericService<Department, string> {

  constructor(protected http: HttpClient) {
    super(http, environment.departmentsApi);
  }

}
