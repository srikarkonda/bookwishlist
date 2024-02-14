import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [{
  path: '',
  component: NavComponent,
  title: 'Home Page',
  children: [{
    path: 'list',
    component: WishlistComponent,
    title: 'Wish List Details'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Wish List Details'
  },
  {
    path: '',
    component: HomeComponent,
    title: 'Wish List Details'
  },
]
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
