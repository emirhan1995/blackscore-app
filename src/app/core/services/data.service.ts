import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, shareReplay } from "rxjs";
import { StandingLeagueId, StandingsByLeagueId } from "../models";

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

  getStandings(league: StandingLeagueId, season = "2022"): Observable<StandingsByLeagueId> {
    const url = `${this.RAPID_URL}/standings`;
    const params = { season, league };
    const headers = { ...this.HEADERS_RAPID_KEY };

    return this.http.get<StandingsByLeagueId>(url, { params, headers }).pipe(
      shareReplay(1)
    );
  }
}
