//import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AboutusComponent } from './aboutus/aboutus.component';

export const routes: Routes = [
    // {
    //     path:'',
    //     redirectTo:'/',
    //     pathMatch:'full'
    // },
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'recipe',
        component:RecipesComponent
    },
    {
        path:'about',
        component:AboutusComponent
    },

]

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule {}