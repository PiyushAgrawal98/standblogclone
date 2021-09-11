import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import{HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendDataService {

  constructor(private http:HttpClient) { }



  getData(){
    let url="https://api.mocki.io/v2/8e408fdb";
    return this.http.get(url);
  }
  getPostDetaildata(){
    let url="https://api.mocki.io/v2/d7b78a23";
    return this.http.get(url);
  }
  getBlogPost(){
    let url="https://api.mocki.io/v2/4172071e";
    return this.http.get(url);
  }

  getRecentPost(){
    let url="https://api.mocki.io/v2/e557272c";
    return this.http.get(url);
  }
}
