import { Component, Input } from '@angular/core';
import { Article } from './../../services/article'
@Component({
  selector: 'articleDescription',
  templateUrl: './articleDescription.component.html',
  styleUrls: ['./articleDescription.component.scss']
})
export class ArticleDescriptionComponent {
  @Input() article: Article;
}