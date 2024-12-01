import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseCardsComponent } from './expense-cards.component';

describe('ExpenseCardsComponent', () => {
  let component: ExpenseCardsComponent;
  let fixture: ComponentFixture<ExpenseCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpenseCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpenseCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
