import { Subject } from './../../../../models/subject';
import { StudentService } from './../../../services/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {
 
   subjects:Subject[]=[];
  constructor(private _studentService:StudentService) { }

  ngOnInit(): void {
    this._studentService.get().subscribe (
      subject=>this.subjects=subject
    )
}
}
