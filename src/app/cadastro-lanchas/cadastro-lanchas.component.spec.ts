import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroLanchasComponent } from './cadastro-lanchas.component';

describe('CadastroLanchasComponent', () => {
  let component: CadastroLanchasComponent;
  let fixture: ComponentFixture<CadastroLanchasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroLanchasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroLanchasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
