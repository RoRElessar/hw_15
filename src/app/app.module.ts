import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {ZoomDirective} from './products/zoom.directive';
import {PriceFormatPipe} from './products/price-format.pipe';
import {CustomIfDirective} from './products/custom-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ZoomDirective,
    PriceFormatPipe,
    CustomIfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
