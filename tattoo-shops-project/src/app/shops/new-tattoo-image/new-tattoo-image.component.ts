import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-tattoo-image',
  templateUrl: './new-tattoo-image.component.html',
  styleUrls: ['./new-tattoo-image.component.css']
})
export class NewTattooImageComponent {
  from = this.fb.group({
    imageUrl:[''],
    description:[''],
  })
  constructor(private fb: FormBuilder, private router:Router){}

  createPost():void{
    if(this.from.invalid){return}
    const {
      imageUrl,
      description
    } = this.from.value;
    console.log(imageUrl, description);
    

    // this.shopService.createShop(name!, imageUrl!).subscribe((res) => {
    //   this.router.navigate(['/shops']);     
    // })
    
  }

}
