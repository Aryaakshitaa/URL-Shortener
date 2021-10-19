import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimURLComponent } from './trim-url.component';

describe('TrimURLComponent', () => {
  let component: TrimURLComponent;
  let fixture: ComponentFixture<TrimURLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrimURLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrimURLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
