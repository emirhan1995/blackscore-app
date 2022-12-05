interface Parameter {
  league: string;
  season: string;
}

interface StandingsByLeagueId__MatchesDetails {
  played: number;
  win: number;
  draw: number;
  lose: number;
}

interface StandingsByLeagueId__Team {
  id: number;
  name: string;
  logo: string;
}

interface StandingsByLeagueId__Rank {
  rank: number;
  team: StandingsByLeagueId__Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: StandingsByLeagueId__MatchesDetails;
  home: StandingsByLeagueId__MatchesDetails;
  away: StandingsByLeagueId__MatchesDetails;
  update: string;
}

interface StandingsByLeagueId__League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: StandingsByLeagueId__Rank[][];
}

interface StandingsByLeagueId__Response {
  league: StandingsByLeagueId__League;
}

export interface IStandingsByLeagueId {
  get: string;
  parameters: Parameter;
  errors: any[];
  results: number;
  paging: { current: number, total: number };
  response: StandingsByLeagueId__Response[];
}
