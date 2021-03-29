import { ProgressStepsComponent } from './progress-steps/progress-steps.component';
import { HiddenSearchWidgetComponent } from './hidden-search-widget/hidden-search-widget.component';
import { ExpandingCardsComponent } from './expanding-cards/expanding-cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'dashboard', component:DashboardComponent },
  { path:'project 1', component:ExpandingCardsComponent },
  { path:'project 2', component:HiddenSearchWidgetComponent },
  { path:'project 3', component:ProgressStepsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
