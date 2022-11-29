import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay, mapTo } from 'rxjs/operators';
import { ComplexFormValue } from 'src/app/core/models/complex-form-value.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComplexFormService {

  constructor(private http: HttpClient ) { }
  // save User Info
  saveUserInfo(formValue: ComplexFormValue): Observable<boolean> {
   
    return this.http.post(`${environment.apiUrl}/users`, formValue).pipe(
      mapTo(true),
      delay(1000),
      catchError(()=> of(false).pipe(
        delay(1000)
      ))
    );
  }

}
