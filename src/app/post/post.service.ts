import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private http = inject(HttpClient)

  private apiURL = "https://jsonplaceholder.typicode.com";

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  constructor() { }

  getAll() : Observable<any>{
    return this.http.get(this.apiURL + '/posts/')
  }

  create(post : Post) : Observable<any>{
    return this.http.post(
      this.apiURL + '/posts/', 
      JSON.stringify(post), 
      this.httpOptions)
  }

  find(id : number) :  Observable <any>{
    return this.http.get(this.apiURL + '/posts/' + id)
  }

  update(id: number, post : Post): Observable<any>{
    return this.http.put(
      this.apiURL + '/posts/' + id,
      JSON.stringify(post),
      this.httpOptions
    )
  }

  delete(id: number){
    return this.http.delete(
      this.apiURL + '/posts/' + id,
      this.httpOptions
    )
  }
}
