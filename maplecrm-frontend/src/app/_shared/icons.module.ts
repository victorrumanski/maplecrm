import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Monitor, BarChart, Bell, Heart, LogOut, MessageSquare, Search, Settings, Terminal, User, UserPlus, Users, ShoppingCart, Tag,Shield } from 'angular-feather/icons';

const icons = {
  Users, 
  User,
  UserPlus,
  Search,
  Monitor,
  Terminal,
  Bell,
  MessageSquare,
  Heart,
  BarChart, 
  Settings, 
  LogOut,
  Tag,
  ShoppingCart,
  Shield
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