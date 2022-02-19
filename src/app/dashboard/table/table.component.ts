import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableData: any;

  header = [
    {
      name: 'Name',
    }, 
    {
      name: 'Status'
    },
    {
      name: 'Profile Match'
    }, 
    {
      name: 'Logical Score'
    },
    {
      name: 'Critical Score'
    }, 
    {
      name: 'Skills Match'
    }
  ]

  activeTab = 'All';
  tabAll = true;
  tabCompleted = false;
  tabShortlist = false;
  completedLength = 0;
  shortlistedLength = 0;
  actualData = [];
  expand = true;

  constructor() { }

  ngOnInit(): void {
    this.actualData = this.tableData.slice(0, 3);
    this.completedLength = this.tableData.filter(item => item.status === 'Completed').length;
    this.shortlistedLength = this.tableData.filter(item => item.status === 'Shortlisted').length;
  }


  badgeColor(status) {
    if (status === 'Completed') {
      return 'badge-gradient-success'
    } else if (status === 'In Progress') {
      return 'badge-gradient-warning'
    } else if (status === 'Unattempted') {
      return 'badge-gradient-danger'
    } else {
      return 'badge-gradient-info'
    }
  }

  completedTab(status) {
    if (status === 'Completed') {
      this.activeTab = 'Completed';
      this.tabCompleted = true;
      this.tabAll = false;
      this.tabShortlist = false;
    } else if (status === 'All') {
      this.activeTab = 'All';
      this.tabAll = true;
      this.tabCompleted = false;
      this.tabShortlist = false;
    } else {
      this.activeTab = 'Shortlisted';
      this.tabShortlist = true;
      this.tabAll = false;
      this.tabCompleted = false;
    }
  }

  sortData(event) {
    if (event === 'Profile Match') {
      this.tableData.sort((a, b) => (a.profileMatch > b.profileMatch) ? -1 : 1);
    } else if (event === 'Logical Score') {
      this.tableData.sort((a, b) => (a.logicalScore > b.logicalScore) ? -1 : 1);
    } else if (event === 'Critical Score') {
      this.tableData.sort((a, b) => (a.criticalScore > b.criticalScore) ? -1 : 1);
    } else if (event === 'Skills Match') {
      this.tableData.sort((a, b) => (a.skillsMatch > b.skillsMatch) ? -1 : 1);
    } else {
      this.tableData.sort((a, b) => (a.status > b.status) ? -1 : 1);
    }
  }

  expandRow(event) {
    if (event === 'expand') {
      this.actualData = this.tableData;
      this.expand = false;
    } else {
      this.actualData = this.tableData.slice(0, 3);
      this.expand = true;
    }
  }

}
