import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { HelpdeskCommonService} from 'src/app/services/helpdesk-common.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup | any

  constructor(private route: Router, private commonservice:HelpdeskCommonService) { }

  ngOnInit(): void {
    this.CreateForm()
  }

  CreateForm() {
    this.loginform = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      
    })

  }

  // siteKey:string = "6LfgGgwmAAAAAJDjQNQESoD-8t19V2M-Rm5Zr9uK"

  login() {
    console.log(this.loginform.value.email)
    console.log(this.loginform.value.password)
    if(this.loginform.invalid){
      return
    }
    let email = this.loginform.value.email
    let password = this.loginform.value.password

    this.commonservice.userLogin(email,password)


    this.route.navigate(["/dashboard"])

  }



}
