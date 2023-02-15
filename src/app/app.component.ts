import { Component } from '@angular/core';
import { EmployeeDataService } from '../app/employeedataservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EmployeeDataService]
})
export class AppComponent {
  title: any;

  constructor(private employeeDataService:EmployeeDataService){
  }
  
}
