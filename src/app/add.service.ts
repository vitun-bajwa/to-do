import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  API:any = environment.baseAPI;
  constructor(private http: HttpClient) {}
  add(data: any){
    return this.http.post(this.API, data);
  }
}
