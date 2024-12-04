import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentCardsComponent } from './investment-cards.component';

describe('InvestmentCardsComponent', () => {
  let component: InvestmentCardsComponent;
  let fixture: ComponentFixture<InvestmentCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestmentCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestmentCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
