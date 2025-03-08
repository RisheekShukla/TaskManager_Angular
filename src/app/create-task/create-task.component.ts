import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskServiceService } from '../task-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {

  tsk !: Task;

  ngOnInit(): void {
    this.tsk = new Task();
  }
  constructor(private tserv:TaskServiceService)
  {

  }
  passValue()
  {
    this.tserv.createTheTask(this.tsk).subscribe(val=>
    {
      console.log("the data is "+val)
    }
    )
  }
}
