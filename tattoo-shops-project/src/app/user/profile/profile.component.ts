import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/types/user';


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
  user:User = {
    "_id": "",
    "email": "",
    "username": "",
    "password": "",
    "__v": 0
  }

  isEditMode:boolean = false;

  profileDetails: Profile ={
    email:'',
    username:''
  };

  form= this.fb.group({
    email:[""],
    username:[""],
    
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
