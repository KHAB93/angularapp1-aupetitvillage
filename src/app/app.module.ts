import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { SortByPricePipe } from './sort-by-price.pipe';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { FilterByNamePipeTsPipe } from './filter-by-name.pipe.ts.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SortByPricePipe,
    ProductsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    FilterByNamePipeTsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
