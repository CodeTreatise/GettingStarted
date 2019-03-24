import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './Welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
