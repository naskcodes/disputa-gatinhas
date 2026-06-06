import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalsichaNavigation } from './salsicha-navigation';

describe('SalsichaNavigation', () => {
  let component: SalsichaNavigation;
  let fixture: ComponentFixture<SalsichaNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalsichaNavigation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalsichaNavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
