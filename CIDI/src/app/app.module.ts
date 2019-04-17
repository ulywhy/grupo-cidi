import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



// MATERIAL CORE
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// MATERIAL MODULES
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';


//CUSTOM COMPONENTS
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { MoreOnServiceComponent } from './more-on-service/more-on-service.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    SolutionsComponent,
    MoreOnServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //material core
    BrowserAnimationsModule,
    FlexLayoutModule,
    //material modules
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
		MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
