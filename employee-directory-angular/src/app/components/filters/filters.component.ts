import { Component } from '@angular/core';
import { EmployeeDataService } from 'src/app/dataservice';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})

export class FiltersComponent {

  deptCount: number;
  jobsCount: number;
  officeCount: number;
  isShow: boolean = false;
  moreJobs = ['dotNet Development Lead'];

  constructor(private employeeDataService: EmployeeDataService) {
    this.deptCount = this.employeeDataService.fieldDict["department"];
    this.jobsCount = this.employeeDataService.fieldDict["jobtitle"];
    this.officeCount = this.employeeDataService.fieldDict["office"];
  }

  viewContent() {
    this.isShow = !this.isShow;
  }

  clickDept(value: string) {
    let dept = value;
    this.employeeDataService.onSideFilterClick(dept);
  }

  clickOffice(value: string) {
    let office = value;
    this.employeeDataService.onSideFilterClick(office);
  }

  clickJob(value: string) {
    let job = value;
    this.employeeDataService.onSideFilterClick(job);
  }
}
