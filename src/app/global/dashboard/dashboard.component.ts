import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HelpdeskCommonService } from '../../services/helpdesk-common.service';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  registrationform: FormGroup | any;
  uploadedImage: File | undefined;

  constructor(private commonservice: HelpdeskCommonService) { }

  ngOnInit(): void {
    this.createForm();
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

    // console.log(this.registrationform.value);
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

  openmodel() {
    // console.log("jlgsjlgjls")
    $('#exampleModal').modal('show');
  }
}
;