import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  // @Input() title:string;
  // @Input() description:string;
  @Input() image:string;
  @Input() admin:string;
  @Input()  date :string;
  @Input() comments:string;
  



  image1='/assets/banner-item-01.jpg';
  constructor() { }
 
  ngOnInit(): void {
  }

}
