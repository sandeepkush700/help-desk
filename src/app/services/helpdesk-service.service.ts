import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { EndpointService} from './endpoint.service'


@Injectable({
  providedIn: 'root'
})
export class HelpdeskServiceService {

  constructor(private http:HttpClient, private endpointservice:EndpointService) { }

  getUserFormData(formData:any){
    return this.http.post(this.endpointservice.userApi,formData).toPromise();
  }
}
