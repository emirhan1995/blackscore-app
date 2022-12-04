import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map, Observable, shareReplay} from "rxjs";
import { StandingsByLeagueId } from "../models";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getStandings(league: string, season = "2022"): Observable<StandingsByLeagueId> {
    const url = "https://api-football-v1.p.rapidapi.com/v3/standings";
    const params = { season, league };
    const headers = {
      'X-RapidAPI-Key': '78ace25fabmshc9ac80f64267a14p14396ajsn2fe87e261eab',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    };
    return this.http.get<StandingsByLeagueId>(url, { params, headers }).pipe(
      shareReplay(1)
    );
  }
}
