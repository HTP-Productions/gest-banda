import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoPresencasComponent } from './evento-presencas.component';

describe('EventoPresencasComponent', () => {
  let component: EventoPresencasComponent;
  let fixture: ComponentFixture<EventoPresencasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoPresencasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoPresencasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
