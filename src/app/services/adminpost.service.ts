import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminpostService {
  apiUrl = environment.apiUrl;


  constructor(private http: HttpClient, ) {

  }
  // get all adminposts
  getAdmin_post(id:number): Observable<any> {
    return this.http.get(environment.apiUrl + `/main/post/${id}/`);
  }

  // delete post
  deleteAdmin_post(id: number) {
    return this.http.delete('https://moti-vate.herokuapp.com/main/post/'+id);
    // return this.http.delete(environment.apiUrl + `/main/post/${id}/`);
  }
}
