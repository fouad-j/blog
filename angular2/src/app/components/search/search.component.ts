import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService }  from './../../services/article.service';
import { Article }  from './../../services/article';
@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  private articles: Article[];
  private sub: any;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) {}

  getArticlesByCategorie(categorie: string): void {
    this.articleService.search(categorie).then(data => this.articles = data);
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => this.getArticlesByCategorie(params['keyword']));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}