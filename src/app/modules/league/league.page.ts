import { Component } from '@angular/core';
import { Observable, switchMap } from "rxjs";
import { IFixturesHeadToHead, IStandingsByLeagueId, StandingLeagueId } from "../../core/models";
import { DataService } from "../../core/services";

@Component({
  selector: 'blackscore-league',
  templateUrl: './league.page.html',
  styleUrls: ['./league.page.scss']
})
export class LeaguePage {
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
