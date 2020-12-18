import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbChatModule, NbSidebarModule, NbButtonModule, NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ChatboxComponent } from './chatbox/chatbox.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbSidebarModule.forRoot(),
    NbChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
