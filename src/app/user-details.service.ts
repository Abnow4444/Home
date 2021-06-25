import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService implements OnInit{

  // url:any = 'https://jsonip.com/';
  url: any = 'http://www.geoplugin.net/json.gp';
  visitorUrl: any = 'https://sheet.best/api/sheets/a50580bd-4e7c-489a-9cf5-2072d03d71ff';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(){
    return this.http.get(this.url);
  }

  updateDetails(city: any, continent: any, country: any, latitude: any, longitude: any, state: any, ip: any){
    this.http.post(this.visitorUrl, {city: city, continent: continent, country: country, latitude: latitude, longitude: longitude, state: state, ip: ip}, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe();
  }

  retrieveUserDBDetails(){
    return this.http.get(this.visitorUrl);
  }

}


