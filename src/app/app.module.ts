import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AcademicsComponent } from './academics/academics.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProjectsComponent } from './projects/projects.component';

import {MenubarModule} from 'primeng-lts/menubar';
import {CardModule} from 'primeng-lts/card';
import {ButtonModule} from 'primeng-lts/button';
import {AccordionModule} from 'primeng-lts/accordion';
import {ChartModule} from 'primeng-lts/chart'
import {ProgressBarModule} from 'primeng-lts/progressbar';
import {TooltipModule} from 'primeng-lts/tooltip';
import {TimelineModule} from 'primeng-lts/timeline';

import { FormsModule } from '@angular/forms';
import {KnobModule} from 'primeng-lts/knob';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcademicsComponent,
    ExperiencesComponent,
    AboutmeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    CardModule,
    ButtonModule,
    AccordionModule,
    ChartModule,
    ProgressBarModule,
    TooltipModule,
    TimelineModule,
    FormsModule,
    KnobModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
