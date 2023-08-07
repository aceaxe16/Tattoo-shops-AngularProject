import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = this.fb.group({
    email:[''],
    password:['']
  })

  constructor(private fb:FormBuilder, private userService: UserService, private router: Router){}

  login():void{
    if(this.form.invalid){
      return 
    }

    const {email, password} = this.form.value;

    this.userService.login(email!, password!).subscribe(()=>{
      this.router.navigate(['/shops'])
    })
  }
}
