import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDiaryComponent } from './show-diary.component';

describe('ShowDiaryComponent', () => {
  let component: ShowDiaryComponent;
  let fixture: ComponentFixture<ShowDiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
