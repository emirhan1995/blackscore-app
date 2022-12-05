import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, shareReplay } from "rxjs";
import { IStandingsByLeagueId, IFixturesHeadToHead, StandingLeagueId } from "../models";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly HEADERS_RAPID_KEY = {
    'X-RapidAPI-Key': '78ace25fabmshc9ac80f64267a14p14396ajsn2fe87e261eab',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  };

  private readonly RAPID_URL = "https://api-football-v1.p.rapidapi.com/v3";

  constructor(private http: HttpClient) {}

  getStandings(league: StandingLeagueId, season = "2022"): Observable<IStandingsByLeagueId> {
    const url = `${this.RAPID_URL}/standings`;
    const params = { season, league };
    const headers = { ...this.HEADERS_RAPID_KEY };

    return this.http.get<IStandingsByLeagueId>(url, { params, headers }).pipe(
      shareReplay(1)
    );
  }

  getUpcomingMatches(leagueId: StandingLeagueId, currentRound: number): Observable<IFixturesHeadToHead> {
    const url = `${this.RAPID_URL}/fixtures`;
    const league = Number(leagueId);
    const round = `Regular Season - ${currentRound + 1}`;
    const params = new HttpParams({
      fromObject: { league, round, season: 2022 }
    });
    const headers = { ...this.HEADERS_RAPID_KEY };

    return this.http.get<IFixturesHeadToHead>(url, { params, headers })
  }
}
