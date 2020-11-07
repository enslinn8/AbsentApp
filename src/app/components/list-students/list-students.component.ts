import { Component, Input, OnInit } from '@angular/core';
import { LogEntry } from 'src/app/shared/log-entry';
import { Student } from 'src/app/shared/student';
import { LoggingService } from "../../services/logging.service";

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  constructor() { }
  @Input() studentList: Student[];
  @Input() selectedYear: number;
  @Input() selectedClass: string;

  ngOnInit(): void {
  }
  log(student: Student, pres: boolean) {

    const ind = this.studentList.findIndex(p => p.key === student.key)
    if (ind !== -1)
      this.studentList[ind].present = pres
  }


 
}
