import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { ThoughtsComponent } from './thoughts/thoughts.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'thoughts', component: ThoughtsComponent},
  {path: 'experience', component: ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
