import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChatPlayerComponent } from './chat-player/chat-player.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {OAuthModule} from 'angular-oauth2-oidc';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { TimePickerComponent } from './shared/components/time-picker/time-picker.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
