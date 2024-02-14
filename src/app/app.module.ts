// Angular core
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

//Components
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BookComponent } from './components/book/book.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { HomeComponent } from './components/home/home.component';


//Modules
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

//service
import { ApiService } from './service/api.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BookComponent,
    WishlistComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
