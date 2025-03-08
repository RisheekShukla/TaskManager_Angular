import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskServiceService } from '../task-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-component.component.html',
  styleUrl: './update-component.component.css'
})
export class UpdateComponentComponent {

  tid!:number;
  tsk:Task= new Task();
  constructor(private router:Router, private tserv:TaskServiceService,private activRoute:ActivatedRoute)
  {

  }
  ngOnInit()
  {
    this.tid = this.activRoute.snapshot.params['id'];
    this.tserv.getTaskById(this.tid).subscribe(val=>
    {
      this.tsk=val;
    }
    )  
  }
  
  readValue()
  {
    this.tserv.updateTheTask(this.tid,this.tsk).subscribe(val=>
    {
      console.log("Data is ",val);
    }
    )
    this.router.navigate(["/alltasks"]);
  }
}
