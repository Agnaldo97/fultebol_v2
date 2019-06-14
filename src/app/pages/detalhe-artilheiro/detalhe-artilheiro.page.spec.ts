import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheArtilheiroPage } from './detalhe-artilheiro.page';

describe('DetalheArtilheiroPage', () => {
  let component: DetalheArtilheiroPage;
  let fixture: ComponentFixture<DetalheArtilheiroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheArtilheiroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheArtilheiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
