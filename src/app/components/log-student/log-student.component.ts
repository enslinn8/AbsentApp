import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/student';
import { StudentsService } from "../../services/students.service";
@Component({
  selector: 'app-log-student',
  templateUrl: './log-student.component.html',
  styleUrls: ['./log-student.component.css']
})
export class LogStudentComponent implements OnInit {

  constructor(private studentService: StudentsService) { }
  studentInfo: Student = {
    name: 'Steve',
    lastName: "Leroux",
    dob: "1990/12/10",
    cmus: "Enter CMUS",
    class: "1",
    year: 2
  }
  ngOnInit(): void {
  }
  addStudent() {
    this.studentService.addStudent(this.studentInfo)
  }

}
