import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  //Importa automatically services
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service done');
  }

  getNewReleases () {
    const headers = new HttpHeaders({
      // tslint:disable-next-line:max-line-length
      'Authorization': 'Bearer BQAf0Hf1l6y-soCxFPtHTWn7ajZnngbMssYNy75tZ5aiskclXSfenZPViJJyQ_71i80PTW5-CgRGzh0PVqo'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
  }


  getArtists (termino: string ) {
    const headers = new HttpHeaders({
      // tslint:disable-next-line:max-line-length
      'Authorization': 'Bearer BQAf0Hf1l6y-soCxFPtHTWn7ajZnngbMssYNy75tZ5aiskclXSfenZPViJJyQ_71i80PTW5-CgRGzh0PVqo'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&market=US&limit=15`, {headers});

  }
}
