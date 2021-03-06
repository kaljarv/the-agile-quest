import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TitleScreenComponent } from './title-screen.component';

describe('TitleScreenComponent', () => {
  let component: TitleScreenComponent;
  let fixture: ComponentFixture<TitleScreenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
