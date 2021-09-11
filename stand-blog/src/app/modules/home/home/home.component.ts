import { Component, OnInit } from '@angular/core';

import{BackendDataService} from 'src/app/backend-data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
homedata:any=[];
recentPost:any=[];
  constructor( private user:BackendDataService) { 
    this.user.getData().subscribe(data=>{
      console.warn(data);
      this.homedata=data;
    });
    this.user.getRecentPost().subscribe(data2=>{
      this.recentPost=data2;
    })
    
  }
// constructor(){}


  ngOnInit(): void {
  }

}
