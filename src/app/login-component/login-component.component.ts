import { Component } from '@angular/core';
import { User } from '../user';
import { TaskServiceService } from '../task-service.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
  uobj!:User;
  constructor(private userv:UserServiceService,private router:Router)
  {

  }
  ngOnInit()
  {
    this.uobj = new User();
  }

  check_login()
  {
    this.userv.CheckTheLogin(this.uobj).subscribe(val=>
    {
      
      localStorage.setItem("admin",this.uobj.username);
      this.router.navigate(['/alltasks']);
    }
    )
    
  }
}
