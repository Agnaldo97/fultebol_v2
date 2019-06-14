import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheEquipePage } from './detalhe-equipe.page';

describe('DetalheEquipePage', () => {
  let component: DetalheEquipePage;
  let fixture: ComponentFixture<DetalheEquipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheEquipePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheEquipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
