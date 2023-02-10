import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeDataService} from 'src/app/dataservice';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  value = '';
  formModal: any;
  filteredOption: any;
  enterinput: any;
  dropdown = false;
  isClicked:boolean =false;
  display='flex';
  isAdd:boolean;
  alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  constructor(private fb: FormBuilder, private employeeDataService: EmployeeDataService) {
  }

  ngOnInit(): void {
  }

  clickAddEmployee(){
    this.display="flex";
    this.isClicked=true;
    this.isAdd=true;
  }

  displayChange(value: string) {
    this.display = value;
  }

  onKeyUp(event: any) {
    this.employeeDataService.keyUpEvent(event.target.value, this.filteredOption);
  }

  onAllempIconClick(event: any) {
    this.employeeDataService.getEmployees(event)
  }

  onAlphabetClick(event: any) {
    this.employeeDataService.clickAlphabetEvent(event.target.innerHTML);
  }

  clear() {
    this.filteredOption = "firstname";
    this.enterinput = ""
  }
}
