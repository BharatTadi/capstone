import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthunticationComponent } from './authuntication.component';

describe('AuthunticationComponent', () => {
  let component: AuthunticationComponent;
  let fixture: ComponentFixture<AuthunticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthunticationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthunticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
