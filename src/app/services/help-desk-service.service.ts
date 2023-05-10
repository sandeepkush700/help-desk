import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{EndpointService} from './endpoint.service'

@Injectable({
  providedIn: 'root'
})
export class HelpDeskServiceService {

  constructor(private service:EndpointService, private http:HttpClient) { }
}