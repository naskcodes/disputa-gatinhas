import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalsichaNews } from './salsicha-news';

describe('SalsichaNews', () => {
  let component: SalsichaNews;
  let fixture: ComponentFixture<SalsichaNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalsichaNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalsichaNews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
