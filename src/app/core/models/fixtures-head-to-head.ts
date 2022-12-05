import { IPaging } from "./base";

interface FixturePeriods {
  first: number;
  second: number;
}

interface FixtureVenue {
  id: number | null;
  name: string;
  city: string;
}

interface FixtureStatus {
  long: string;
  short: string;
  elapsed: number;
}

interface Fixture {
  id: number;
  referee: string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: FixturePeriods;
  venue: FixtureVenue;
  status: FixtureStatus;
}

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

interface Team {
  id: number;
  name: string;
  logo: string;
  winner: boolean;
}

interface Teams {
  home: Team;
  away: Team;
}

interface Goals {
  home: number | null;
  away: number | null;
}

interface Score {
  halftime: Goals;
  fulltime: Goals;
  extratime: Goals;
  penalty: Goals;
}

interface Response {
  fixture: Fixture;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
}

export interface IFixturesHeadToHead {
  get: string;
  parameters: { h2h: string };
  errors: any[];
  results: number;
  paging: IPaging;
  response: Response[];
}
