import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';



import { Socio } from '../_models/Socio';
import { Evento } from '../_models/Evento';


import { SOCIOS, SOCIOS2 } from '../_mock/SOCIOS';
import { EVENTOS } from '../_mock/EVENTOS';
import { CordovaService } from './cordova.service';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database'
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  constructor(private cordovaService: CordovaService,
    private db: AngularFireDatabase) { }

  getSocios(): Observable<Socio[]> {
    if (!this.cordovaService.onCordova) {
      //return of(SOCIOS2);
      return this.db.list<Socio>('/socios').valueChanges();
      //return this.db.collection<Socio>('/socios').valueChanges();
    } else {
      return of(SOCIOS);
    }


  }

  getEventos(): Observable<Evento[]> {
    if (!this.cordovaService.onCordova) {
     //return of(EVENTOS);
      return this.db.list<Evento>('/eventos').valueChanges();
    } else {
      return of(EVENTOS);
    }
  }

  getEvento(id: number): Observable<Evento> {
    return of(EVENTOS.find(evento => evento.id === id));
  }

}








