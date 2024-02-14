import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
constructor(private apiService: ApiService)
{
}
get books()
{
  return this.apiService.bookWishList;
}

delete(index:number)
{
  console.log(index)
  this.apiService.bookWishList.splice(index,1)
}
}
