import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenSearchWidgetComponent } from './hidden-search-widget.component';

describe('HiddenSearchWidgetComponent', () => {
  let component: HiddenSearchWidgetComponent;
  let fixture: ComponentFixture<HiddenSearchWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiddenSearchWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenSearchWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
