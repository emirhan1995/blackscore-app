import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaguePage } from "./league.page";

const routes: Routes = [
  {
    path: "",
    component: LeaguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueRoutingModule { }
