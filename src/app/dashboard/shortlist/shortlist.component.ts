import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-shortlist',
  templateUrl: './shortlist.component.html',
  styleUrls: ['./shortlist.component.scss']
})
export class ShortlistComponent implements OnInit {

  @Input() tableData: any;

  titleCard = [
    {name: 'Top Profile Match'},
    {name: 'Top Logical Score'},
    {name: 'Top Critical Score'},
  ]

  profileMatchData = []
  logicalMatchData = []
  criticalMatchData = []
  

  constructor() {

  }

  ngOnInit() {
    this.profileMatchData = this.tableData.slice(0, 3);
    this.logicalMatchData = this.tableData.slice(0, 3);
    this.criticalMatchData = this.tableData.slice(0, 3);
    this.sortDataLogical(this.logicalMatchData, this.tableData);
    this.sortDataCritical(this.criticalMatchData, this.tableData);
    this.sortDataProfile(this.profileMatchData, this.tableData);
  }


  changeShortlistStatus(event, i) {
    if (event === 'shortlist') {
      this.tableData[i].isShortlist = true; 
    } else {
      this.tableData[i].isShortlist = false;
    }
  }

  sortDataLogical(logicalMatchData, tableData) {
    logicalMatchData.sort((a, b) => {
      return b.logicalScore - a.logicalScore;
    });
    tableData.sort((a, b) => {
      return b.logicalScore - a.logicalScore;
    });
  }

  sortDataCritical(criticalMatchData, tableData) {
    criticalMatchData.sort((a, b) => {
      return b.criticalScore - a.criticalScore;
    });
    tableData.sort((a, b) => {
      return b.criticalScore - a.criticalScore;
    });
  }

  sortDataProfile(profileMatchData, tableData) {
    profileMatchData.sort((a, b) => {
      return b.profileMatch - a.profileMatch;
    });
    tableData.sort((a, b) => {
      return b.profileMatch - a.profileMatch;
    });
  }

}

