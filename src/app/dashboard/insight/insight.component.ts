import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.scss']
})
export class InsightComponent implements OnInit {

  @Input() tableData: any

  
  insights = [
  ]
  constructor() { }

  ngOnInit(): void {
    this.insights = [
      {
        total: 2,
        title: 'New Candidates',
      },
      {
        total: this.tableData.length,
        title: 'Total Candidates',
      },
      {
        total: 5,
        title: 'Emails Sent',
      },
      {
        total: 2,
        title: 'Emails Opened'
      },
      {
        total: 1,
        title: 'Emails Bounced'
      }
    ]
  }

}
