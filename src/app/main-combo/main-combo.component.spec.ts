import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComboComponent } from './main-combo.component';

describe('MainComboComponent', () => {
  let component: MainComboComponent;
  let fixture: ComponentFixture<MainComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComboComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
