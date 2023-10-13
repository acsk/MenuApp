import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideCardapioComponent } from './aside-cardapio.component';

describe('AsideCardapioComponent', () => {
  let component: AsideCardapioComponent;
  let fixture: ComponentFixture<AsideCardapioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideCardapioComponent]
    });
    fixture = TestBed.createComponent(AsideCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
