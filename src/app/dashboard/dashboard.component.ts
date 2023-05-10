import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { HelpDeskCommomService } from '../services/help-desk-commom.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  registrationform: FormGroup | any

  constructor(private commonservice: HelpDeskCommomService) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {

    this.registrationform = new FormGroup({
      lname: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
      department: new FormControl(''),
      query: new FormControl(''),
      file: new FormControl('')

    })
  }
  onSubmit() {
    console.log(this.registrationform.value)
    let lname = this.registrationform.value.lname;
    let email = this.registrationform.value.email;
    let mobile = this.registrationform.value.mobile;
    let department = this.registrationform.value.department;
    let query = this.registrationform.value.query;
    let file = this.registrationform.value.file;

    this.commonservice.getUserFormData(lname,email,mobile,department,query,file)
  }
}
