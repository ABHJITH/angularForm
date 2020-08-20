import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Formdata } from './formdata';



@Injectable({
  providedIn: 'root'
})
export class FormSeriveService {
  url='https://loacalhost'
  constructor(private http:HttpClientModule) { }

  enroll(data:Formdata){
    console.log(data)
    return this.http.get<any>(this.url,data)
    
  }
}
