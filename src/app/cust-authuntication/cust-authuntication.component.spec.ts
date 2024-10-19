import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustAuthunticationComponent } from './cust-authuntication.component';

describe('CustAuthunticationComponent', () => {
  let component: CustAuthunticationComponent;
  let fixture: ComponentFixture<CustAuthunticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustAuthunticationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustAuthunticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
