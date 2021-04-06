import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
@Input() authordescription:string;
@Input() authorname:string;
@Input() date:string;
@Input() image:string;
  constructor() { }

  ngOnInit(): void {
  }

}
