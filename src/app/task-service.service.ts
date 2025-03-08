import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http:HttpClient) {
    console.log("inside servie");
   }

  baseUrl = "http://localhost:8080/task"
  createTheTask(tsk:Task):Observable<Object>
  {
    return this.http.post(this.baseUrl+"/addData",tsk);
  }  

  getTheTaskList():Observable<Task[]>
  {
    return this.http.get<Task[]>(this.baseUrl+"/show");
  }
  getTaskById(id:number):Observable<Task>
  {
    return this.http.get<Task>(`${this.baseUrl}/show/${id}`);
  }
  updateTheTask(id:number,old_task:Task):Observable<Object>
  {
    return this.http.put(`${this.baseUrl}/update/${id}`,old_task);
  }
  deleteTheTask(id:number):Observable<Object>
  {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
  
}
