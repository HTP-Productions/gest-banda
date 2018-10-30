import { Component, OnInit } from '@angular/core';
import { Evento } from '../_models/Evento';
import { DaoService } from '../_services/dao.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.sass' ]
})
export class DashboardComponent implements OnInit {
  eventos: Evento[] = [];

  constructor(private daoService: DaoService) { }

  ngOnInit() {
    this.getEventos();
  }

  getEventos(): void {
    this.daoService.getEventos()
      .subscribe(eventos => this.eventos = eventos);
  }
}
