export class Employee {
    id: number;
    firstName: string;
    lastName: string;
    jobTitle: string;
    department: string;
    email: any;
    office: string;
    phoneNumber: number;
    skypeId: any;
    constructor(id: number, firstName: string, lastName: string, 
        jobtitle: string, department: string,email: any, office: string, phonenumber: number, skypeid: any,) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.jobTitle = jobtitle;
        this.department = department;
        this.office = office;
        this.phoneNumber = phonenumber;
        this.skypeId = skypeid;
      };
    }  