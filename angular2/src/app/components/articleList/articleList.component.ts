import { Component, Input } from '@angular/core';
import { ArticleService } from './../../services/article.service';
import { Article } from './../../services/article';

@Component({
  selector: 'articleList',
  templateUrl: './articleList.component.html',
  styleUrls: ['./articleList.component.scss']
})
export class ArticleListComponent{
   @Input() articles: Article[] = [];
   
  constructor() {}
}