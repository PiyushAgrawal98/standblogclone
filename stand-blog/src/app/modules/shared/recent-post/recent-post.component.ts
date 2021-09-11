import { Component, OnInit } from '@angular/core';
import{BackendDataService} from 'src/app/backend-data.service';

@Component({
  selector: 'app-recent-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.css']
})
export class RecentPostComponent implements OnInit {
recentPost:any=[];
  constructor(private userData:BackendDataService) { 

    this.userData.getRecentPost().subscribe(data=>{
      this.recentPost=data;
    })
  }

  ngOnInit(): void {
  }

}
