import { Sector } from './../shared/models/sector';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root',
})
export class SectorsService extends GenericService<Sector, string> {

  constructor(protected http: HttpClient) {
    super(http, environment.sectorsApi);
  }

}
