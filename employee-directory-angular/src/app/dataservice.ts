import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from './Employee';


@Injectable({
  providedIn: 'root'
})

export class EmployeeDataService {

  filteredEmployees: any;
  employees: Employee[] = [];
  public employeeDataSubject = new BehaviorSubject<any>([]);
  fieldDict:any={"department":{},"office":{},"jobtitle":{}};
 
  constructor() {
    this.employeeDataSubject.next([]);
    this.employees = [
      new Employee(1, "anthony", "morris", "sharepoint practice head", "IT department", "anthonymorris@gmail.com", "India", 8745630218, "live:anthonymorris"),
      new Employee(2, "helen", "zimmerman", "operations manager", "IT department", "anthonymorris@gmail.com", "India", 8745630218, "live:anthonymorris"),
      new Employee(3, "jonathon", "smith", "product manager", "IT department", "anthonymorris@gmail.com", "India", 8745630218, "live:anthonymorris"),
      new Employee(4, "tami", "hopkins", "lead engineer", "IT department", "anthonymorris@gmail.com", "India", 8745630218, "live:anthonymorris"),
      new Employee(5, "franklin", "humark", "network engineer", "IT department", "anthonymorris@gmail.com", "seattle", 8745630218, "live:anthonymorris"),
      new Employee(6, "angela", "bailey", "talent manager", "HR department", "anthonymorris@gmail.com", "seattle", 8745630218, "live:anthonymorris"),
      new Employee(7, "robert", "mitchell", "software engineer", "IT department", "anthonymorris@gmail.com", "seattle", 8745630218, "live:anthonymorris"),
      new Employee(8, "olivia", "watson", "UI designer", "UX department", "anthonymorris@gmail.com", "seattle", 8745630218, "live:anthonymorris"),
    ];
    this.employeeDataSubject.next(this.employees);
    this.calculateCount();
  }

  calculateCount():any {
    this.employees.forEach(employee => {
      if (employee.department in this.fieldDict["department"]) {
        this.fieldDict["department"][employee.department] += 1;
      }
      else {
        this.fieldDict["department"][employee.department] = 1;
      }
      if (employee.office in this.fieldDict["office"]) {
        this.fieldDict["office"][employee.office] += 1;
      }
      else {
        this.fieldDict["office"][employee.office] = 1;
      }
    
      if (employee.jobtitle in this.fieldDict["jobtitle"]) {
        this.fieldDict["jobtitle"][employee.jobtitle] += 1;
      }
      else {
        this.fieldDict["jobtitle"][employee.jobtitle] = 1;
      }
    });
  }
 
  getEmployees(event: any) {
    this.employeeDataSubject.next(this.employees);
  }

  getFilteredEmployees() {
    this.employeeDataSubject.next(this.filteredEmployees);
  }

  clickAlphabetEvent(alphabet: any) {
    console.log(alphabet);
    this.filteredEmployees = this.employees.filter(
      (emp) => emp.firstname.startsWith(alphabet.toLowerCase()) ||
        emp.lastname.startsWith(alphabet.toLowerCase()));
    this.employeeDataSubject.next(this.filteredEmployees);
  }

  keyUpEvent(search: string, filterkey: string) {
    this.filteredEmployees = this.employees.filter(
      (emp) => emp[filterkey as keyof typeof emp].toLowerCase().includes(search.toLowerCase()))
    this.getFilteredEmployees();
  }

  onSideFilterClick(data: string) {
    this.filteredEmployees = this.employees.filter(
          (emp) => emp.department.includes(data)|| emp.jobtitle.includes(data)|| emp.office.includes(data));
          this.getFilteredEmployees();
      }

    addEmployee(obj: any) {
    const empl = new Employee(2, obj.firstname,obj.lastname, obj.jobtitle, obj.department, obj.email,obj.office, obj.phonenumber,obj.skypeid);
    console.log(empl);
    this.employees.push(empl);
    this.employeeDataSubject.next(this.employees);
    console.log(this.employees);
  };

}


