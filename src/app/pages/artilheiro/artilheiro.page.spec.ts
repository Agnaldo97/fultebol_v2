import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtilheiroPage } from './artilheiro.page';

describe('ArtilheiroPage', () => {
  let component: ArtilheiroPage;
  let fixture: ComponentFixture<ArtilheiroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtilheiroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtilheiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
