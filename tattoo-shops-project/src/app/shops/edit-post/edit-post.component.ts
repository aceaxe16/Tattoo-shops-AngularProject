import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  // const shopId = this.activeRoute.snapshot.params['shopId']
  constructor(private fb: FormBuilder, private activeRoute: ActivatedRoute){}
  from = this.fb.group({
    imageUrl:[''],
    description:[''],
  })

  editPost(){
    if(this.from.invalid){return}
    const {
      imageUrl,
      description
    } = this.from.value;
    console.log(imageUrl, description);
    const shopId = this.activeRoute.snapshot.params['shopId']   

    // this.shopService.createPost(imageUrl!, description!, shopId!).subscribe(() => {
    //   this.isPostMode = !this.isPostMode    
    })
       
  }
}
