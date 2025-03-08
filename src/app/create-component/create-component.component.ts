import { Component } from '@angular/core';
import { Task } from '../task';
import { FormsModule } from '@angular/forms';
import { TaskServiceService } from '../task-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-component.component.html',
  styleUrl: './create-component.component.css'
})
export class CreateComponentComponent {
  tsk:Task=new Task();
  constructor(private tervice:TaskServiceService,private router:Router)
  {
    console.log("inside tser");
  }
  ngOnInit()
  {
  }
  storeValue()
  {
    this.tervice.createTheTask(this.tsk).subscribe(dta=>
      {
        console.log("Data is "+dta)
      }
    )
    console.log("Employee id enter by user is "+this.tsk.id);
    console.log("Employee name is "+this.tsk.name)
    this.router.navigate(["/alltasks"]);
  }
}
