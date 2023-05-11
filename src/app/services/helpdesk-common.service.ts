import { Injectable } from '@angular/core';
import {HelpdeskServiceService} from './helpdesk-service.service'

@Injectable({
  providedIn: 'root'
})
export class HelpdeskCommonService {

  constructor(private helpdeskservice:HelpdeskServiceService) { }

  async getUserFormData(name: any, email: any, mobile: any, department: any, query: any, file: any) {
    let formData: any = new FormData();
    formData.append("name", name)
    formData.append("email", email)
    formData.append("mobileno", mobile)
    formData.append("department", department)
    formData.append("query", query)
    formData.append("attachment", file)
    await this.helpdeskservice.getUserFormData(formData).then((data: any) => {
      if(data.status=="success"){
        console.log("Data----->", data)
      }
    })
  }
}
