import { Component, OnInit } from '@angular/core';

import { Shop } from '../../types/shop';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-shops-gallery',
  templateUrl: './shops-gallery.component.html',
  styleUrls: ['./shops-gallery.component.css']
})
export class ShopsGalleryComponent implements OnInit {
  allShops:Shop[] = [];

  constructor(private apiService:ApiService){}

  ngOnInit(): void {
    this.apiService.getTattooShops().subscribe(shops => {
      this.allShops = shops
    })
  }
}
