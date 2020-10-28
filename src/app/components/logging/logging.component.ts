import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/student';
import { StudentsService } from "../../services/students.service";
@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  studentList: Student[];
  years: any = [];
  yearClasses: string[];
  selectedYear: number;
  selectedClass: string;
  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    this.loadStudents();


  }
  loadStudents() {
    this.studentService.getAllStudent().subscribe(data => {
      this.studentList = data.map(e => {
        let t: Student = {
          key: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          lastName: e.payload.doc.data()['lastName'],
          cmus: e.payload.doc.data()['cmus'],
          dob: e.payload.doc.data()['dob'],
          year: e.payload.doc.data()['year'],
          class: e.payload.doc.data()['class']
        }
        let ind = this.years.findIndex(p => p.year == t.year);
        if (ind === -1) {
          let y = {
            year: t.year,
            class: [t.class]
          }
          this.years.push(y);
          this.years.sort();
        } else {
          let year = this.years[ind];

          let cInd = year.class.findIndex(p => p == t.class)
          if (cInd === -1) {
            this.years[ind].class.push(t.class)
          }

        }
        return t as Student
      })
    })

  }
  setClass(yearClass) {
    this.selectedClass = yearClass
  }
  setYear(year) {
    console.log(year);

    this.selectedYear = year.year;
    this.yearClasses = year.class
  }
}
