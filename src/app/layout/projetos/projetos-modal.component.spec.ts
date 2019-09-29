import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosModalComponent } from './projetos-modal.component';

describe('ProjetosModalComponent', () => {
  let component: ProjetosModalComponent;
  let fixture: ComponentFixture<ProjetosModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetosModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
