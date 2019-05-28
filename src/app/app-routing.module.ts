import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ChatPlayerComponent} from './chat-player/chat-player.component';

const routes: Array<any> = [
  {
    path: 'chat-player',
    loadChildren: './chat-player/chat-player.module#ChatPlayerModule'
  },
  // { path: '', redirectTo: '/laws', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
