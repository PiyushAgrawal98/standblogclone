import { Component, OnInit } from '@angular/core';
import { BackendDataService } from 'src/app/backend-data.service';
import{FormsModule} from '@angular/forms';

@Component({
  selector: 'app-blog-entries',
  templateUrl: './blog-entries.component.html',
  styleUrls: ['./blog-entries.component.css'],
})
export class BlogEntriesComponent implements OnInit {
  blogPost: any = [];
  recentPost: any = [];
  headline: string;
  constructor(private userData: BackendDataService) {
    this.userData.getBlogPost().subscribe((data) => {
      this.blogPost = data;
    });
    this.userData.getRecentPost().subscribe((data2) => {
      this.recentPost = data2;
    });
  }
  deleteEvent(index: number) {
    this.blogPost.splice(index, 1);
  }

  search() {
    if (this.headline =="") {
      this.ngOnInit();
    } else {
      this.recentPost = this.recentPost.filter((text: { headline: string; }) => {
        return text.headline
          .toLocaleLowerCase()
          .match(this.headline.toLocaleLowerCase());
      });
    }
  }

  ngOnInit(): void {}
}
