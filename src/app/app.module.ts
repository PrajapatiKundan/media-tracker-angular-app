import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaItemListComponent } from './component/media-item-list/media-item-list.component';
import { MediaItemComponent } from './component/media-item/media-item.component';
import { MediaItemEditFormComponent } from './component/media-item-edit-form/media-item-edit-form.component';
import { NewMediaItemFormComponent } from './component/new-media-item-form/new-media-item-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemListComponent,
    MediaItemComponent,
    MediaItemEditFormComponent,
    NewMediaItemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
