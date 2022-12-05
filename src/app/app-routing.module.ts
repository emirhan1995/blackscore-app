import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./modules/index/index.module").then(m => m.IndexModule)
  },
  {
    path: "league",
    loadChildren: () => import("./modules/league/league.module").then(m => m.LeagueModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
