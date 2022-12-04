import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from "rxjs";
import { StandingLeagueId, StandingsByLeagueId } from "./core/models";
import { DataService } from "./core/services";

@Component({
  selector: 'blackscore-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  standings$: Observable<StandingsByLeagueId>;

  constructor(private data: DataService) {
    this.standings$ = this.data.getStandings(StandingLeagueId.ENGLAND_PREMIER_LEAGUE);
  }
}
