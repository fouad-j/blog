import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService }  from './../../services/categorie.service';
import { Article }  from './../../services/article';
@Component({
  selector: 'categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  private articles: Article[];
  private sub: any;

  constructor(private categorieService: CategorieService, private route: ActivatedRoute) {}

  getArticlesByCategorie(categorie: string): void {
    this.categorieService.getArticlesCategorie(categorie).then(data => this.articles = data);
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => this.getArticlesByCategorie(params['keyword']));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}