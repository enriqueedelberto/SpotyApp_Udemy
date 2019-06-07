import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  countries: any [] = [];
  constructor( private spotify: SpotifyService) { 
    console.log('home constructor');
    this.spotify.getNewReleases();
  }


}
