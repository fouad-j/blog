import { Component, OnInit } from '@angular/core';
import { ArticleService } from './../../services/article.service';
import { Article } from './../../services/article';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {

  private articles: Article[];

  constructor(private articleService: ArticleService) {}

  getArticles(): void {
    this.articleService.getArticles().then(data => this.articles = data);
  }

  ngOnInit(): void {
    this.getArticles();
  }
}