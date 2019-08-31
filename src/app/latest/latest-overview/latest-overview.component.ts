import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { StaticDataService } from 'src/app/static-data.service';

@Component({
  selector: 'app-latest-overview',
  templateUrl: './latest-overview.component.html',
  styleUrls: ['./latest-overview.component.scss']
})
export class LatestOverviewComponent implements OnInit {
  public posts$: Observable<Map<string, Post[]>>;

  constructor(private staticDataService: StaticDataService) { }

  ngOnInit() {
    this.load();
  }
  private load() {
    this.posts$ = this.staticDataService.getPostsByTags();
  }

}
