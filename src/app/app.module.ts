import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetadataErrorService } from './services/errors/metadata-error.service';
import { UserListComponent } from './user-list/user-list.component';
import { HighlightTextPipe } from './pipes/highlight-text.pipe';
import { LocationSearchPipe } from './pipes/location-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HighlightTextPipe,
    LocationSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: ErrorHandler, useClass: MetadataErrorService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
