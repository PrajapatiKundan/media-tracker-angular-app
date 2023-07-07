import { Injectable, ModuleWithProviders } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaItem } from '../model/media-item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {

  private ROOT_URL: string = 'http://localhost:8080/media-tracker';

  constructor(private http: HttpClient) { }

  public getMediaItems(): Observable<MediaItem[]> {
    return this.http.get<MediaItem[]>(`${this.ROOT_URL}/mediaitems`);
  }

  public getMediaItem(id: number): Observable<MediaItem[]> {
    return this.http.get<MediaItem[]>(`${this.ROOT_URL}/mediaitems/find/${id}`);
  }

  public addMediaItem(mediaItem: MediaItem): Observable<MediaItem> {
    return this.http.post<MediaItem>(`${this.ROOT_URL}/mediaitems/add`, mediaItem);
  }

  public updateMediaItem(mediaItem: MediaItem): Observable<MediaItem> {
    return this.http.put<MediaItem>(`${this.ROOT_URL}/mediaitems/update`, mediaItem);
  }

  public deleteMediaItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.ROOT_URL}/mediaitems/delete/${id}`);
  }
}
