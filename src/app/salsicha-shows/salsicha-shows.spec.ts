import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalsichaShows } from './salsicha-shows';

describe('SalsichaShows', () => {
  let component: SalsichaShows;
  let fixture: ComponentFixture<SalsichaShows>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalsichaShows]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalsichaShows);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
