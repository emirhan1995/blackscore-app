import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguePage } from './league.page';

describe('IndexComponent', () => {
  let component: LeaguePage;
  let fixture: ComponentFixture<LeaguePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaguePage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
