import { FormBuilder, FormGroup } from '@angular/forms';
import { MediaItemService } from './../../service/media-item.service';
import { Component, OnInit } from '@angular/core';
import { MediaItem } from 'src/app/model/media-item';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-new-media-item-form',
  templateUrl: './new-media-item-form.component.html',
  styleUrls: ['./new-media-item-form.component.css']
})
export class NewMediaItemFormComponent implements OnInit {
  newMediaItemForm: FormGroup;

  constructor(private mediaItemService: MediaItemService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.newMediaItemForm = this.fb.group({
      name: [''],
      genre: [''],
      category: [''],
      releaseYear: [''],
      watchedOn: [],
      favorite: [false]
    })
  }

  submit() {
    const newMediaItem: MediaItem = { ...this.newMediaItemForm.value };
    console.log("New Media Item: ", newMediaItem);
    this.mediaItemService.addMediaItem(newMediaItem).subscribe((response) => {
      console.log("Response: ", response);
    },
    (error: HttpErrorResponse) => {
      console.log(error.message);
    }
    )
  }
}
