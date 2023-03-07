import { DataStorageService } from './shared/data-storage.service';
import { RecipeService } from './recipes/recipe.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AuthGuard } from './auth/auth.guard';
import { RecipesModule } from './recipes/recipes.module';
import { RecipesRoutingModule } from './recipes/recipes-routing.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RecipesModule,
    RecipesRoutingModule,
    ShoppingListModule,
    SharedModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    RecipesResolverService,
    AuthService,
    {provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
