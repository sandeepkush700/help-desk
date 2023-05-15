import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HelpdeskCommonService } from '../services/helpdesk-common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  registrationform: FormGroup | any;
  uploadedImage: File | undefined;
  name:any
  email:any
  mobile:any;
  department:any;
  query:any;
  file:any
  dept:any;
  constructor(private commonservice: HelpdeskCommonService) {}

  ngOnInit(): void {
    this.createForm();
    this.dept=['Host','Lab','Food']
  }

  createForm() {
    this.registrationform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      query: new FormControl('', Validators.required),
      file: new FormControl('', Validators.required),
    });
  }

  public onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    console.log(this.uploadedImage);
  }

  onSubmit() {
    
  
    let name = this.registrationform.value.name;
    let email = this.registrationform.value.email;
    let mobile = this.registrationform.value.mobile;
    let department = this.registrationform.value.department;
    let query = this.registrationform.value.query;
    // let file = this.registrationform.value.file;
    console.log(this.registrationform);
    if (this.registrationform.invalid) {
      return;
    }
    this.commonservice.getUserFormData(
      name,
      email,
      mobile,
      department,
      query,
      this.uploadedImage
    );
  }
}
