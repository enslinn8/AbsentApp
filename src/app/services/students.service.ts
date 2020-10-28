import { Injectable } from '@angular/core';
import { Student } from "../shared/student";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private afs: AngularFirestore) { }

  getStudent() {

  }
  addStudent(student: Student) {
    console.log(student)
    this.afs.collection('students').add(student).then(() => console.log(`saved`))
  }
  removeStudent() {

  }

  getAllStudent() {
    return this.afs.collection('students').snapshotChanges();
  }

}
