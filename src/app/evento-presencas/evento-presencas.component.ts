import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Socio } from '../_models/Socio';
import { SOCIOS } from '../_mock/SOCIOS';
import { Evento }  from '../_models/Evento';
import { DaoService } from '../_services/dao.service';

@Component({
  selector: 'app-evento-presencas',
  templateUrl: './evento-presencas.component.html',
  styleUrls: ['./evento-presencas.component.sass']
})
export class EventoPresencasComponent implements OnInit {

  @Input() evento: Evento;
  socios: Socio[];

  constructor(    
    private route: ActivatedRoute,
    private daoService: DaoService,
    private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.daoService.getEvento(id)
      .subscribe(evento => this.evento = evento);

    this.getSocios();
  }

  getSocios(): void {
    this.daoService.getSocios()
    .subscribe(socios => this.socios = socios);
  }

  getEvento(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.daoService.getEvento(id)
      .subscribe(evento => this.evento = evento);
  }

}
