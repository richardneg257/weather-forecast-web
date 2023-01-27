import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  urlBase: string = 'http://localhost:5126/WeatherForecast';

  constructor(private httpClient: HttpClient) { }

  listarClimas(): Observable<any> {
    return this.httpClient.get(this.urlBase);
  }
}
