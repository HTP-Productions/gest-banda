import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { DaoService }  from '../_services/dao.service';
import { Evento }  from '../_models/Evento';

@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.sass']
})

export class EventoDetailComponent implements OnInit {

  @Input() evento: Evento;
  
  constructor(
    private route: ActivatedRoute,
    private daoService: DaoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getEvento();
  }
  
  getEvento(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.daoService.getEvento(id)
      .subscribe(evento => this.evento = evento);
  }

  goBack(): void {
    this.location.back();
  }

}
