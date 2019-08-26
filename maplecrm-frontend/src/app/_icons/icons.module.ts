import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import {
  Airplay, BarChart, Bell, Heart, MessageSquare, Search, Settings, Terminal, User, UserPlus, Users, LogOut
} from 'angular-feather/icons';


const icons = {
  Users, User,
  UserPlus,
  Search,
  Airplay,
  Terminal,
  Bell,
  MessageSquare,
  Heart,
  BarChart, Settings, LogOut
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