import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
