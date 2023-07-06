import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaItemEditFormComponent } from './media-item-edit-form.component';

describe('MediaItemEditFormComponent', () => {
  let component: MediaItemEditFormComponent;
  let fixture: ComponentFixture<MediaItemEditFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaItemEditFormComponent]
    });
    fixture = TestBed.createComponent(MediaItemEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
