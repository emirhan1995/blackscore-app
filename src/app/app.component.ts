import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, switchMap } from "rxjs";
import { IFixturesHeadToHead, IStandingsByLeagueId, StandingLeagueId } from "./core/models";
import { DataService } from "./core/services";

@Component({
  selector: 'blackscore-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  standings$: Observable<IStandingsByLeagueId>;
  matches$: Observable<IFixturesHeadToHead>;

  constructor(private data: DataService) {
    const league = StandingLeagueId.SPAIN_LA_LIGA;
    this.standings$ = this.data.getStandings(league);
    this.matches$ = this.data.getUpcomingMatches(league, 15);

    this.matches$ = this.standings$.pipe(
      switchMap(s => {
        let currentRound = s.response[0].league.standings[0][0].all.played;
        s.response[0].league.standings[0].forEach(round => {
          if (round.all.played > currentRound) {
            currentRound = round.all.played;
          }
        });

        return this.data.getUpcomingMatches(league, currentRound);
      }),
    )
  }
}
