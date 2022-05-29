import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable, throwError} from 'rxjs';
import {User} from '../model/User';
import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_API = 'https://api.github.com/users';

  constructor(private http: HttpClient) {
  }

  /**
   * Http call to retrieve all users and their detail
   * @param offset
   */
  getUsers(offset: number): Observable<any> {

    console.log('calling users', offset);
    return this.http.get(`${this.URL_API}?since=${offset}`).pipe(
      map((res: any) => res.map(user => this.getUser(user.login))),
      switchMap((users) => forkJoin(users)),
      catchError(error => throwError(error))
    );

  }
  /**
   * Http call to retrieve user detail
   * @param offset
   */
  getUser(user: string): Observable<any> {
    return this.http.get(`${this.URL_API}/${user}`).pipe(
      catchError(error => throwError(error))
    );
  }
}
