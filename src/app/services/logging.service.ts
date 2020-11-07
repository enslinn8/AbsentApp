import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LogEntry } from "../shared/log-entry";
@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(private afs: AngularFirestore) { }

  logEntry(entry: LogEntry) {
    this.afs.collection('attendance').add(entry).then(() => console.log(`saved`)).catch(() => console.log(`error occured`))
  }
  getEntries() {

  }
}
