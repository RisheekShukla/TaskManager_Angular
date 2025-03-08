import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient,private route:Router) { }
  baseUrl = "http://localhost:8080/user"

  CheckTheLogin(user:User):Observable<boolean>
    {
      // console.log("gssd");
      return this.http.get<boolean>(`${this.baseUrl}/login/${user.username}/${user.password}`);
    }
}
