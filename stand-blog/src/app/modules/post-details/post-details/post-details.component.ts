import { Component, OnInit } from '@angular/core';
import{BackendDataService} from 'src/app/backend-data.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
postData:any=[];
  constructor(private dataPost:BackendDataService) {
    this.dataPost.getPostDetaildata().subscribe(data=>{
      console.warn(data);
      this.postData=data;
    })
   }

  ngOnInit(): void {
  }

}
