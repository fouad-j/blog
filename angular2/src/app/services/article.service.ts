import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Article } from './article';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArticleService {
  constructor(private http: Http) {}

  getArticles(numPage:number = 1, itemByPage:number = 10): Promise<Article[]> {
    return this.http.get(`/query/rest/articles/numPage/${numPage}/nbItem/${itemByPage}`)
               .toPromise()
               .then(response => response.json() as Article[])
               .catch(error => console.log('Error', error));
  }

  getArticle(articleId:string): Promise<Article> {
    return this.http.get(`/query/rest/article/${articleId}`)
               .toPromise()
               .then(response => response.json() as Article)
               .catch(error => console.log('Error', error));
  }

  search(keyword:string): Promise<Article[]> {
    return this.http.get(`/query/rest/articles/search/${keyword}`)
              .toPromise()
              .then(response => response.json() as Article[])
              .catch(error => console.log('Error', error));
  }
}
