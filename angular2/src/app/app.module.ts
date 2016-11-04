import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { SearchMenuComponent }      from './components/searchMenu/searchMenu.component';
import { CategorieMenuComponent }   from './components/categorieMenu/categorieMenu.component';
import { HeaderComponent }          from './components/header/header.component';
import { FooterComponent }          from './components/footer/footer.component';
import { AboutComponent }           from './components/about/about.component';
import { ContactComponent }         from './components/contact/contact.component';
import { CategorieComponent }       from './components/categorie/categorie.component';
import { ArticleComponent }         from './components/article/article.component';
import { ArticleListComponent }     from './components/articleList/articleList.component';
import { HomeComponent }            from './components/home/home.component';
import { ArticleService }           from './services/article.service';
import { CategorieService }         from './services/categorie.service';
import { SearchComponent }          from './components/search/search.component';
import { routing }                  from './app.router';
import { ArticleDescriptionComponent } from './components/articleDescription/articleDescription.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
    declarations: [ AppComponent, SearchComponent, HeaderComponent, 
                    FooterComponent, CategorieComponent, ArticleListComponent,
                    ArticleDescriptionComponent, AboutComponent, ContactComponent,
                    ArticleComponent, HomeComponent, SearchMenuComponent, CategorieMenuComponent ],
    providers:    [ ArticleService, CategorieService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
