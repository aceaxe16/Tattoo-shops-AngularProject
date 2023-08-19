import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from '../shopServices.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  constructor(private fb:FormBuilder,
    private activeRoute: ActivatedRoute,
    private shopService: ShopService,
    private router: Router
    ){}

  from = this.fb.group({
    imageUrl:[''],
    description:[''],
  })

  createPost(){
    if(this.from.invalid){return}
    const {
      imageUrl,
      description
    } = this.from.value;
    
    const shopId = this.activeRoute.snapshot.params['shopId']   
    
    
    this.shopService.createPost(imageUrl!, description!, shopId!).subscribe(() => {           
        this.router.navigate([`/shops/${shopId}`])
    })       
  }
}
