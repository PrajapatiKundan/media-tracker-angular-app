import { MediaItem } from 'src/app/model/media-item';
import { MediaItemService } from './../../service/media-item.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  public mediaItems: MediaItem[] = [];

  constructor(private mediaItemService: MediaItemService) {
  }

  ngOnInit(): void {
    this.mediaItemService.getMediaItems().subscribe((mediaItems: MediaItem[]) => {
      this.mediaItems = mediaItems;
    },
    (error: HttpErrorResponse) => {
      console.log(error.message);
    }
    )
  }
}
