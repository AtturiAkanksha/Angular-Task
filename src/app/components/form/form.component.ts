import { Component,  Input,  Output, EventEmitter, OnChanges } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeDataService } from '../../employeedataservice';
import { Employee } from '../../Employee';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges {

  formModal: any;
  isFormSubmitted: boolean = false;
  @Input() display!: string;
  @Input() employee!: Employee;
  @Input() isEdit!: boolean;
  @Input() isAdd!: true;
  @Output() displayChange = new EventEmitter();

  constructor(private employeeDataService: EmployeeDataService, private fb: FormBuilder) {
  }

  AddEmployeeForm: FormGroup = new FormGroup(
    {
      firstname: new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z]{3,20}$")]),
      lastname: new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z]{3,20}$")]),
      email: new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z0-9._]+@[a-z]+\\.[a-z]{2,5}$")]),
      skypeid: new FormControl(null, Validators.required),
      jobtitle: new FormControl(null, Validators.required),
      department: new FormControl(null, Validators.required),
      phonenumber: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]{10}$")]),
      office: new FormControl(null, Validators.required),
    }
  );

  ngOnChanges(): void {
    if (this.isEdit) {
      this.AddEmployeeForm.controls['firstname'].setValue(this.employee.firstName);
      this.AddEmployeeForm.controls['lastname'].setValue(this.employee.lastName);
      this.AddEmployeeForm.controls['email'].setValue(this.employee.email);
      this.AddEmployeeForm.controls['skypeid'].setValue(this.employee.skypeId);
      this.AddEmployeeForm.controls['jobtitle'].setValue(this.employee.jobTitle);
      this.AddEmployeeForm.controls['department'].setValue(this.employee.department);
      this.AddEmployeeForm.controls['phonenumber'].setValue(this.employee.phoneNumber);
      this.AddEmployeeForm.controls['office'].setValue(this.employee.office);
    }
  }

  submitForm() {
    this.isFormSubmitted = true;
    if (this.AddEmployeeForm.status == "VALID") {
      const firstnameInput = this.AddEmployeeForm.get('firstname')?.value;
      const lastnameInput = this.AddEmployeeForm.get('lastname')?.value;
      const emailInput = this.AddEmployeeForm.get('email')?.value;
      const jobtitleInput = this.AddEmployeeForm.get('jobtitle')?.value;
      const officeInput = this.AddEmployeeForm.get('office')?.value;
      const departmentInput = this.AddEmployeeForm.get('department')?.value;
      const phonenumberInput = Number(this.AddEmployeeForm.get('phonenumber')?.value);
      const skypeidInput = this.AddEmployeeForm.get('skypeid')?.value;
      if (this.isEdit) {
        this.employee.firstName = firstnameInput;
        this.employee.lastName = lastnameInput;
        this.employee.email = emailInput;
        this.employee.skypeId = skypeidInput;
        this.employee.jobTitle = jobtitleInput;
        this.employee.department = departmentInput;
        this.employee.phoneNumber = phonenumberInput;
        this.employee.office = officeInput;
      }
      else{
        let obj = {
          firstnameInput,
          lastnameInput,
          jobtitleInput,
          departmentInput,
          emailInput,
          officeInput,
          phonenumberInput,
          skypeidInput
        }
        this.employeeDataService.addEmployee(obj);
        this.AddEmployeeForm.reset();
        this.display = "none";
        this.displayChange.emit("none");
      }
    }
  }

  onClose() {
      this.displayChange.emit("none");
  }
}


