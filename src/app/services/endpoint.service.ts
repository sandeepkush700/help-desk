import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor() { }

  hostUrl: string = "";

  userApi: string = `${this.hostUrl}/api/session.php`;
}
