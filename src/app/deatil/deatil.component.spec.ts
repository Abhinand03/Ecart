import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatilComponent } from './deatil.component';

describe('DeatilComponent', () => {
  let component: DeatilComponent;
  let fixture: ComponentFixture<DeatilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeatilComponent]
    });
    fixture = TestBed.createComponent(DeatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
