import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';
import { EventoPresencasComponent } from './evento-presencas/evento-presencas.component';

import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireModule} from 'angularfire2';
import { environment } from '../environments/environment';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';

import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EventoDetailComponent,
    EventoPresencasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AngularFireDatabase, AngularFireAuth ,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
