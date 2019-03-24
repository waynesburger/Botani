import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalLeaderboard } from './globalLeaderboard';

describe('Tab1Page', () => {
  let component: GlobalLeaderboard;
  let fixture: ComponentFixture<GlobalLeaderboard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalLeaderboard],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalLeaderboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
