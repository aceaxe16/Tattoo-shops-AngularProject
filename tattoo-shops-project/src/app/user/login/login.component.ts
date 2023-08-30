import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { appEmailValidator } from 'src/app/shared/validators/email.validator';
import { DEFAULT_EMAIL_DOMAIN } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = this.fb.group({
    email:['',[Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAIN)]],
    password:['', [Validators.required, Validators.minLength(4)]]
  })

  constructor(private fb:FormBuilder, private userService: UserService, private router: Router){}

  login():void{
    if(this.form.invalid){
      return 
    }

    const {email, password} = this.form.value;

    this.userService.login(email!, password!).subscribe((res)=>{
      if(res){
        localStorage.setItem('token', res.token)       
        
        this.router.navigate(['/shops'])
      }
    })
  }
}
