import { Component, Input } from '@angular/core';
import { MediaItem } from 'src/app/model/media-item';

@Component({
  selector: 'app-media-item-edit-form',
  templateUrl: './media-item-edit-form.component.html',
  styleUrls: ['./media-item-edit-form.component.css']
})
export class MediaItemEditFormComponent {
  @Input()
  mediaItem: MediaItem;
}
