import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleListComponent } from './components/articleList/articleList.component';
import { CategorieComponent }   from './components/categorie/categorie.component';
import { ArticleComponent }     from './components/article/article.component';
import { ContactComponent }     from './components/contact/contact.component';
import { AboutComponent }       from './components/about/about.component';
import { HomeComponent }        from './components/home/home.component';
import { SearchComponent }      from './components/search/search.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home',                 component: HomeComponent        },
  { path: 'articles',             component: ArticleListComponent },
  { path: 'articles/:idArticle',  component: ArticleComponent     },
  { path: 'search/:keyword',      component: SearchComponent      },
  { path: 'categorie/:keyword',   component: CategorieComponent   },
  { path: 'about',                component: AboutComponent       },
  { path: 'contact',              component: ContactComponent     }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
