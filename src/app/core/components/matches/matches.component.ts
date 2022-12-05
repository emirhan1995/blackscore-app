import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IFixturesHeadToHead } from "../../models";

@Component({
  selector: 'blackscore-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchesComponent {
  @Input()
  matches!: IFixturesHeadToHead;
}
