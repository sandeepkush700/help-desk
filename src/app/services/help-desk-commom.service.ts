import { Injectable } from '@angular/core';
import { HelpDeskServiceService } from './help-desk-service.service'
@Injectable({
  providedIn: 'root'
})
export class HelpDeskCommomService {

  constructor(private helpservice: HelpDeskServiceService) { }

  async getUserFormData(name: any, email: any, mobile: any, department: any, query: any, file: any) {
    let formData: any = new FormData();
    formData.append("name", name)
    formData.append("email", email)
    formData.append("mobileno", mobile)
    formData.append("department", department)
    formData.append("query", query)
    formData.append("attachment", file)
    await this.helpservice.getUserFormData(formData).then((data: any) => {
      if(data.status=="success"){
        console.log("Data----->", data)
      }
    })
  }
}
