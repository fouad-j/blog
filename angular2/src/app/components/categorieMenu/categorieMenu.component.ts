import { Component, OnInit } from '@angular/core';
import { CategorieService } from './../../services/categorie.service';

@Component({
  selector: 'categorieMenu',
  templateUrl: './categorieMenu.component.html',
  styleUrls: ['./categorieMenu.component.scss']
})
export class CategorieMenuComponent implements OnInit {
  private categories: any;

  constructor(private categorieService: CategorieService) {}

  getCategories(): void {
    this.categorieService.getCategories().then(data => this.categories = data);
  }

  ngOnInit(): void {
    this.getCategories();
  }
}