import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpandingCardsComponent } from './expanding-cards/expanding-cards.component';
import { HiddenSearchWidgetComponent } from './hidden-search-widget/hidden-search-widget.component';
import { ProgressStepsComponent } from './progress-steps/progress-steps.component';
import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ExpandingCardsComponent,
    HiddenSearchWidgetComponent,
    ProgressStepsComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
