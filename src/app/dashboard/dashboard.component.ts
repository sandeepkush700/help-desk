import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  registrationform: FormGroup | any

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
    console.log("fhfkshd")
    console.log(this.registrationform.value)
  }
}
