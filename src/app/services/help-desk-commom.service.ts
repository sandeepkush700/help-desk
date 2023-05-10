import { Injectable } from '@angular/core';
import { HelpDeskServiceService} from './help-desk-service.service'
import {DashboardComponent} from '../dashboard/dashboard.component'

@Injectable({
  providedIn: 'root'
})
export class HelpDeskCommomService {

  constructor(private helpservice:HelpDeskServiceService, private dashboard:DashboardComponent) { }

  async getUserFormData(){
    let lname = this.dashboard.registrationform.value.lname;
    let email = this.dashboard.registrationform.value.email;
    let mobile = this.dashboard.registrationform.value.mobile;
    let department = this.dashboard.registrationform.value.department;
    let query = this.dashboard.registrationform.value.query;
    let file = this.dashboard.registrationform.value.file;

    let formData: any = new FormData();
    formData.append("name",lname)
    formData.append("email",email)
    formData.append("mobileno",mobile)
    formData.append("department",department)
    formData.append("query",query)
    formData.append("attachment",file)

    await this.helpservice.getUserFormData(formData).then((data:any)=>{
      console.log("Data----->",data)
    })
  }
}
