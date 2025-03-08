import { Component } from '@angular/core';
import { Task } from '../task';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-view-component',
  standalone: true,
  imports: [],
  templateUrl: './view-component.component.html',
  styleUrl: './view-component.component.css'
})
export class ViewComponentComponent {
    tid!:number;
    tsk:Task= new Task();
    constructor(private router:Router, private tserv:TaskServiceService,private activRoute:ActivatedRoute)
    {
  
    }
    ngOnInit(){
      this.tid = this.activRoute.snapshot.params['id'];
      console.log("value of id is "+this.tid);
      this.tserv.getTaskById(this.tid).subscribe(data=>
      {
          this.tsk=data;
      })
    }
}
