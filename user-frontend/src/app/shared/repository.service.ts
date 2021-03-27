import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  public urlAddress: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getData = (route: string, params?: HttpParams) => {
    return this.http.get(this.createCompleteRoute(route, this.urlAddress), { params });
  }

  public create = (route: string, body) => {
    return this.http.post(this.createCompleteRoute(route, this.urlAddress), body, this.generateHeaders());
  }

  public createForFile = (route: string, body) => {
    return this.http.post(this.createCompleteRoute(route, this.urlAddress), body, this.generateHeadersForFile());
  }

  public update = (route: string, body) => {
    return this.http.put(this.createCompleteRoute(route, this.urlAddress), body, this.generateHeaders());
  }

  public updateForFile = (route: string, body) => {
    return this.http.put(this.createCompleteRoute(route, this.urlAddress), body, this.generateHeadersForFile());
  }

  public delete = (route: string) => {
    return this.http.delete(this.createCompleteRoute(route, this.urlAddress));
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}${route}`;
  }

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  }

  private generateHeadersForFile = () => {
    return {
      headers: new HttpHeaders({ 'Accept': '*/*' })
    }
  }
}
