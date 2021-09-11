import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  // @Input() title:String;
  // @Input() titleDescription:string;
  // @Input() admin:string;
  // @Input() date:string;
  // @Input() comments:string;
  // @Input() blogdescrption:string;
  // @Input() template1:string;
  // @Input() template2:string;
  // @Input() socialhandle1:string;
  // @Input() socialhandle2:String;
  // @Input() image:string;

  @Input() indexelement:number;
  @Output() deleteEvent = new EventEmitter();

  deletePost(){
    this.deleteEvent.emit(this.indexelement);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
