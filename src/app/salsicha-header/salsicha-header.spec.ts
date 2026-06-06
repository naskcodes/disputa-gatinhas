import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalsichaHeader } from './salsicha-header';

describe('SalsichaHeader', () => {
  let component: SalsichaHeader;
  let fixture: ComponentFixture<SalsichaHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalsichaHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalsichaHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
