import { Component,EventEmitter, Input, OnInit ,Output} from '@angular/core';
import {EmployeeDataService} from '../../dataservice'
import {FormBuilder, FormGroup} from '@angular/forms';
import { Employee } from 'src/app/Employee';

declare var window:any;

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css'],
})

export class CardContainerComponent implements OnInit{

  @Output() showComponent = new EventEmitter<boolean>(false);

  inputText!: string;
  allEmployees:Employee[];
  card: any;
  imagepath:any;
  regForm!: FormGroup;
  formModal:any;
  searchText:string=''; 
  filteredEmployees=[] ;
  isClicked:boolean =false;
  display='flex';
  employee:Employee;
  isEdit:boolean=false;

  constructor(private employeeDataService:EmployeeDataService, private fb:FormBuilder){
    this.employeeDataService.employeeDataSubject.subscribe((employees)=>
    this.allEmployees=employees);
    this.imagepath='';
  }

  ngOnInit():void{
  }

  clickCard(emp:any){
    this.display='flex';
    this.isClicked=true;
    this.employee=emp;
    this.isEdit=true;
  }

  displayChange(value: string) {
    this.display = value;
  }

}

