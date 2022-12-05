import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueRoutingModule } from './league-routing.module';
import { LeaguePage } from "./league.page";
import { MatchesComponent, StandingsComponent} from "../../core/components";

const COMPONENTS = [
  StandingsComponent,
  MatchesComponent
];

@NgModule({
  declarations: [LeaguePage, ...COMPONENTS],
  imports: [
    CommonModule,
    LeagueRoutingModule
  ]
})
export class LeagueModule { }
