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
  uploadedImage: File | undefined

  constructor(private commonservice: HelpDeskCommomService) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {

    this.registrationform = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
      department: new FormControl(''),
      query: new FormControl(''),
      file: new FormControl('')

    })
  }

  public onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    console.log(this.uploadedImage)
  }
 async onSubmit() {
    console.log(this.registrationform.value)
    let name = this.registrationform.value.name;
    let email = this.registrationform.value.email;
    let mobile = this.registrationform.value.mobile;
    let department = this.registrationform.value.department;
    let query = this.registrationform.value.query;

   await this.commonservice.getUserFormData(name, email, mobile, department, query, this.uploadedImage)
  }
}
