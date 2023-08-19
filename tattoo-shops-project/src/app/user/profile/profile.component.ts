import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';

import { appEmailValidator } from 'src/app/shared/validators/email.validator';
import { DEFAULT_EMAIL_DOMAIN } from 'src/app/shared/constants';


interface Profile{
  email:string, 
  username: string,
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  

  isEditMode:boolean = false;

  profileDetails: Profile ={
    email:'',
    username:''
  };

  form= this.fb.group({
    email:['', [Validators.required,  appEmailValidator(DEFAULT_EMAIL_DOMAIN)]],
    username:['', [Validators.required, Validators.minLength(3)]],
    
  })

  constructor(private userService: UserService, private fb:FormBuilder){
    
  }
  

   ngOnInit(): void {    
    const {username, email, } = this.userService.user!;    
    this.profileDetails ={
      username,
      email,
      
    };

    this.form.setValue({
      username,email,
    })
      
   }

   toggleEditMode():void{
    this.isEditMode =!this.isEditMode
  }


  saveProfileHandler():void{   
    
    if(this.form.invalid){
      return
    }

    this.profileDetails = {...this.form.value} as Profile;
    const {username, email,}= this.form.value;    
    this.userService.updateProfile(username!, email!).subscribe(() =>{
      this.toggleEditMode();

    });   
    
  }
}
