import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/student';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  constructor() { }
  @Input() studentList: Student[];
  @Input() selectedYear:number
  @Input() selectedClass:string
  ngOnInit(): void {
  }

}
