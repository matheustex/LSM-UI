import { CrudOperations } from './crud-operations.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });

export abstract class GenericService<T, ID> implements CrudOperations<T, ID> {
  constructor(
    protected http: HttpClient,
    protected base: string
  ) {}

  save(t: T): Observable<T> {
    return this.http.post<T>(this.base, JSON.stringify(t), {...headers});
  }

  update(id: ID, t: T): Observable<T> {
    return this.http.put<T>(`${this.base}/${id}`, JSON.stringify(t), {...headers});
  }

  findOne(id: ID): Observable<T> {
    return this.http.get<T>(`${this.base}/${id}`, {...headers});
  }

  findAll(): Observable<T[]> {
    return this.http.get<T[]>(this.base, {...headers});
  }

  delete(id: ID): Observable<T> {
    return this.http.delete<T>(`${this.base}/${id}`, {...headers});
  }

}
