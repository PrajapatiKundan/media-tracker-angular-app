import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMediaItemFormComponent } from './new-media-item-form.component';

describe('NewMediaItemFormComponent', () => {
  let component: NewMediaItemFormComponent;
  let fixture: ComponentFixture<NewMediaItemFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewMediaItemFormComponent]
    });
    fixture = TestBed.createComponent(NewMediaItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
