import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AcademicsComponent } from './academics/academics.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'academics', component: AcademicsComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  declarations: [ 
    // AboutmeComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
