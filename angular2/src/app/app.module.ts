import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ArticleDescriptionComponent } from './articleDescription/ArticleDescription.component';
@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, SearchComponent, HeaderComponent, 
                    FooterComponent, CategorieComponent, ArticleDescriptionComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
