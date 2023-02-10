export class Employee {
    id: number;
    firstname: string;
    lastname: string;
    jobtitle: string;
    department: string;
    email: any;
    office: string;
    phonenumber: number;
    skypeid: any;
    constructor(id: number, firstName: string, lastName: string, 
        jobtitle: string, department: string,email: any, office: string, phonenumber: number, skypeid: any,) {
        this.id = id;
        this.firstname = firstName;
        this.lastname = lastName;
        this.email = email;
        this.jobtitle = jobtitle;
        this.department = department;
        this.office = office;
        this.phonenumber = phonenumber;
        this.skypeid = skypeid;
      };
    }  