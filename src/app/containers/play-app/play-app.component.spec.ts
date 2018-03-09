import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayAppComponent } from './play-app.component';

describe('PlayAppComponent', () => {
  let component: PlayAppComponent;
  let fixture: ComponentFixture<PlayAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
