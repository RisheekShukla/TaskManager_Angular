import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskServiceService } from '../task-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-task-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-task-component.component.html',
  styleUrl: './all-task-component.component.css'
})
export class AllTaskComponentComponent {
  tsklist!:Task[];
  constructor(private tservice:TaskServiceService,private router:Router)
  {

  }
  ngOnInit()
  {
    this.get_allTasks();  
  }
  get_allTasks()
  {
    this.tservice.getTheTaskList().subscribe(val=>
    {
      this.tsklist=val;
    }
    )
  }
  updateDetails(id:number)
  {
    this.router.navigate(["update",id]);
  }
  DeleteDetails(id:number)
  {
    this.tservice.deleteTheTask(id).subscribe(val=>
    {
      console.log("task deleted ",val);
      this.get_allTasks();
    }
    )
  }
  viewDetails(id:number)
  {
    this.router.navigate(["view",id]);
  }
}
