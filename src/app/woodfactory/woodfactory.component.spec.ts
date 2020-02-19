import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodfactoryComponent } from './woodfactory.component';

describe('WoodfactoryComponent', () => {
  let component: WoodfactoryComponent;
  let fixture: ComponentFixture<WoodfactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoodfactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodfactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
