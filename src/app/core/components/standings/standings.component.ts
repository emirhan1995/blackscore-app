import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StandingsByLeagueId } from "../../models";

@Component({
  selector: 'blackscore-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandingsComponent {
  @Input()
  standings!: StandingsByLeagueId;
}
