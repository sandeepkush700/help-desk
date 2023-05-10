import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor() { }

  hostUrl: string = "http://localhost:3000";

  userApi: string = `${this.hostUrl}/user`;
}
