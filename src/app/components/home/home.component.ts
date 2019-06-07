import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  countries: any [] = [];
  constructor( private http: HttpClient) { 
    console.log('home constructor');
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe((response: any) => {
      this.countries = response;
      console.log(response);
    });
  }

  ngOnInit() {
  }

}
