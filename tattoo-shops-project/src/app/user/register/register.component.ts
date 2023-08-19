import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAIN } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/email.validator';
import { matchPasswordsValidator } from 'src/app/shared/validators/match-passwords-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form = this.fb.group({
    username:['', [Validators.required, Validators.minLength(5)]],
    email:['', [Validators.required,  appEmailValidator(DEFAULT_EMAIL_DOMAIN)]],
    tel:[''],
    passGroup: this.fb.group({
      password:['', [Validators.required, Validators.minLength(5)]],
      rePassword:['', [Validators.required]], 
    },
    {
      validators: [matchPasswordsValidator("password", "rePassword")]
    })
  })
 
  constructor(private userService: UserService,
    private router: Router,
    private fb: FormBuilder
    ){}

  register():void{
    if(this.form.invalid){
      return
    }

   const {
    username,
    email,
    passGroup:{password, rePassword} = {}
  } = this.form.value
   this.userService.register(username!, email!, password!).subscribe((res) =>{
    if(res){
      localStorage.setItem('token', res.token)
      this.router.navigate(['/shops'])
    }
   })
   
    
  }
}
