import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCryptoTransakComponent } from './buy-crypto-transak.component';

describe('BuyCryptoTransakComponent', () => {
  let component: BuyCryptoTransakComponent;
  let fixture: ComponentFixture<BuyCryptoTransakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyCryptoTransakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCryptoTransakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
