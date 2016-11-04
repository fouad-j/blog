import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Article } from './article';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategorieService {
  constructor(private http: Http) {}

  getCategories(): Promise<string[]> {
    return this.http.get(`/query/rest/categories`)
               .toPromise()
               .then(response => response.json() as string[])
               .catch(error => console.log('Error', error));
  }

  getArticlesCategorie(categorieTag:string): Promise<Article[]> {
    return this.http.get(`/query/rest/categorie/${categorieTag}`)
               .toPromise()
               .then(response => response.json() as Article[])
               .catch(error => console.log('Error', error));
  }
}
