import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  array = []

  tableData = [
    {
      checkbox: true,
      name: 'Mike',
      status: 'Completed',
      profileMatch: 78,
      logicalScore: 18,
      criticalScore: 92,
      skillsMatch: 66,
      isShortlist: false,
    },
    {
      checkbox: true,
      name: 'June',
      status: 'Completed',
      profileMatch: 57,
      logicalScore: 99,
      criticalScore: 88,
      skillsMatch: 76,
      isShortlist: false,
    },
    {
      checkbox: true,
      name: 'Tyson',
      status: 'Unattempted',
      profileMatch: 39,
      logicalScore: 88,
      criticalScore: 72,
      skillsMatch: 21,
      isShortlist: false,
    },
    {
      checkbox: true,
      name: 'Fariz',
      status: 'Shortlisted',
      profileMatch: 78,
      logicalScore: 91,
      criticalScore: 10,
      skillsMatch: 27,
      isShortlist: true,
    },
    {
      checkbox: true,
      name: 'Kalwinder',
      status: 'In Progress',
      profileMatch: 76,
      logicalScore: 29,
      criticalScore: 32,
      skillsMatch: 99,
      isShortlist: false,
    },
  ]


  constructor() { }

  ngOnInit() {
  }


}
