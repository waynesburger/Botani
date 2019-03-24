import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaniMap } from './map';

describe('Tab2Page', () => {
  let component: BotaniMap;
  let fixture: ComponentFixture<BotaniMap>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BotaniMap],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaniMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
