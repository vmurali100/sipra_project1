import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  showContenet = null;
  courseDetails = [];
  constructor(private cs: CommonService) {}

  ngOnInit(): void {
    this.courseDetails = this.cs.getCourseDetails();
  }
  show(content) {
    console.log(content);
    if (this.showContenet == content) {
      this.showContenet = null;
    } else {
      this.showContenet = content;
    }
  }
}
