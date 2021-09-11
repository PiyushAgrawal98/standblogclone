import { Component, OnInit, Input  , Output, EventEmitter  } from '@angular/core';
import{ BackendDataService} from 'src/app/backend-data.service'
// import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-home-blog-post',
  templateUrl: './home-blog-post.component.html',
  styleUrls: ['./home-blog-post.component.css']
})

export class HomeBlogPostComponent implements OnInit {
  @Input() indexelement:number;
  @Output() deleteEvent = new EventEmitter();

  deletePost(){
    this.deleteEvent.emit(this.indexelement);
  }
// homedata:any=[]
//   constructor( private user:BackendDataService) { 
//         this.user.getData().subscribe(data=>{
//           this.homedata=data;
//          })}
constructor(){}

  ngOnInit(): void {
  }

}
