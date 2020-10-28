import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogStudentComponent } from './components/log-student/log-student.component';
import { environment } from 'src/environments/environment';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { LoggingComponent } from './components/logging/logging.component';

@NgModule({
  declarations: [
    AppComponent,
    LogStudentComponent,
    ListStudentsComponent,
    LoggingComponent
  ],
  imports: [FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    // AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
