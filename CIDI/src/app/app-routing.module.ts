import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//custom components
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { MoreOnSolutionComponent } from './more-on-solution/more-on-solution.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
	{ path: 'solution/:name', component: MoreOnSolutionComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
