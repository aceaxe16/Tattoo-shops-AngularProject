import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from '../shopServices.service';
import { TattooPost } from 'src/app/types/tattoo-post';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit{
  post:TattooPost | undefined
  // const shopId = this.activeRoute.snapshot.params['shopId']
  constructor(private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private shopService: ShopService,
    private router: Router
    ){}
  from = this.fb.group({
    imageUrl:[''],
    description:[''],
  })

  ngOnInit(): void {
    const shopId = this.activeRoute.snapshot.params['shopId'] 
    this.shopService.getCurrentPost(shopId).subscribe((res) => {
      this.post = res[0]
      const data = res[0]
      const imageUrl = data.imageUrl;
      const description = data.description;
      console.log(data);
      
      
      
      this.from.setValue({
        imageUrl, description
      })
    })
  }

  editPost(){
    if(this.from.invalid){return}
    const {
      imageUrl,
      description
    } = this.from.value;
    const shopId = this.activeRoute.snapshot.params['shopId'] 
    const postId = this.activeRoute.snapshot.params['postId']   
    this.shopService.editPost(imageUrl!, description!, postId).subscribe((res) =>{
      this.router.navigate([`/shops/${shopId}`])
    })       
  }

  
  deletePost(){
    const postId = this.activeRoute.snapshot.params['postId'];
    const shopId = this.activeRoute.snapshot.params['shopId']; 
    if(window.confirm('Are sure you want to delete this item ?')){
      this.shopService.deletePost(postId).subscribe((res) => {
        this.router.navigate([`/shops/${shopId}`])
      })      
     }
  }
}
