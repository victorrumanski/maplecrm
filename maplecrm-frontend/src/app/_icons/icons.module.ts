import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Search, Users, Airplay, Terminal, Bell, MessageSquare } from 'angular-feather/icons';

const icons = {
  Users,
  Search,
  Airplay,
  Terminal,
  Bell,
  MessageSquare
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }