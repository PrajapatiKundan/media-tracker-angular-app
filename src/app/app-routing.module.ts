import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaItemListComponent } from './component/media-item-list/media-item-list.component';
import { MediaItemEditFormComponent } from './component/media-item-edit-form/media-item-edit-form.component';
import { NewMediaItemFormComponent } from './component/new-media-item-form/new-media-item-form.component';

const routes: Routes = [
  { path: 'edit', component: MediaItemEditFormComponent },
  { path: 'add', component: NewMediaItemFormComponent },
  { path: '', component: MediaItemListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
