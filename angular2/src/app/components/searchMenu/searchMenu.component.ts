import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'searchMenu',
  templateUrl: './searchMenu.component.html',
  styleUrls: ['./searchMenu.component.scss']
})
export class SearchMenuComponent {
  
  private searchKeyword: string;
  private formSearch: any;

  constructor(private router: Router) {}

  onSubmit(): void {
    this.router.navigate(['/search', this.searchKeyword]);
  }

}