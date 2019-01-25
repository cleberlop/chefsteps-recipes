import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { RecipesService } from '../_services/recipes.service';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecipesPage } from '../pages/recipes/recipes';
import { InstructionsComponent } from '../_components/instructions/instructions.component';
import { RecipeSlideComponent } from '../_components/recipe-slide/recipe-slide.component';
import { RecipeImageComponent } from '../_components/recipe-image/recipe-image.component';
import { LikeButtonComponent } from '../_components/like-button/like-button.component';
import { RecipeIngredientComponent } from '../_components/recipe-ingredient/recipe-ingredient.component';
import { RecipeStepComponent } from '../_components/recipe-step/recipe-step.component';
import { HomeButtonComponent } from '../_components/home-button/home-button.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecipesPage,
    InstructionsComponent,
    RecipeSlideComponent,
    RecipeImageComponent,
    LikeButtonComponent,
    RecipeIngredientComponent,
    RecipeStepComponent,
    HomeButtonComponent
  ],
  imports: [BrowserModule, HttpModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, RecipesPage],
  providers: [StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler }, RecipesService]
})
export class AppModule {}
