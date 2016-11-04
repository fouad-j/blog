import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from './../../services/article.service';
import { Article } from './../../services/article';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  private sub: any;
  private article: Article;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) {}

  getArticle(idArticle: string): void {
    this.articleService.getArticle(idArticle).then(data => this.article = data);
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => this.getArticle(params['idArticle']));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}