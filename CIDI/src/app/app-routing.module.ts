import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//custom components
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SolutionsComponent } from './solutions/solutions.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
