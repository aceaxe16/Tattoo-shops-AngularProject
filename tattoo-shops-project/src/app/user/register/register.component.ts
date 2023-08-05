import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private userService: UserService, private router: Router){}

  register(form: NgForm):void{
    if(form.invalid){
      return
    }

   const {username, email, password} = form.value
   this.userService.register(username, email, password).subscribe(() =>{
    this.router.navigate(['/shops'])
   })
   
    
  }
}
