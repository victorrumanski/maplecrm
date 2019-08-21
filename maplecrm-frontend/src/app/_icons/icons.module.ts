import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Search, Users, Airplay, Terminal } from 'angular-feather/icons';

const icons = {
  Users,
  Search,
  Airplay,
  Terminal
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