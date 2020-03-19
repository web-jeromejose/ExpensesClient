import { AppRouterModule } from './app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EntriesComponent } from './entries/entries.component';
// services 2. link to providers below
import {EntryService} from './entry.service';
import { HttpClientModule } from '@angular/common/http';

// material design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      EntriesComponent,
      FooterComponent,
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      // ngb bootstrap mod
      NgbModule,
      // material design
      BrowserAnimationsModule,
      MatButtonModule, MatCheckboxModule,
      AppRouterModule

   ],
   providers: [EntryService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
