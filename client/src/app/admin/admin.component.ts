import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  showContenet = null
  constructor() { }

  ngOnInit(): void {
  }
  show(content){
    console.log(content)
    this.showContenet = content
  }

}
