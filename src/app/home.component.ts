import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  private id: number;
  private title: string;
  private posts: Post[];

  constructor(private dataService: DataService) {
    console.log('made it in ds const');
  }

  public ngOnInit() {
    // console.log('ngoninit');
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    console.log(this.posts[0].id);
    });
  }
}

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
