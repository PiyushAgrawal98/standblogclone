import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-module-banner',
  templateUrl: './module-banner.component.html',
  styleUrls: ['./module-banner.component.css']
})
export class ModuleBannerComponent implements OnInit {
@Input() pagetitle:string;
@Input() subheading:string;
  constructor() { }

  ngOnInit(): void {
  }

}
