import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WitService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer YR6NCVBIF53VHPGUQTYR3EEVHDDXQUV4'
    })
  };

  getMessage(msg: string){
    return this.http.get(`https://api.wit.ai/message?v=20191216&q=${msg}`,)
  }
}
