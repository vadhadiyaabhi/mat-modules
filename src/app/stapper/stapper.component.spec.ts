import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StapperComponent } from './stapper.component';

describe('StapperComponent', () => {
  let component: StapperComponent;
  let fixture: ComponentFixture<StapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
