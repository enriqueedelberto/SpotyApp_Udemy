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
      'Authorization': 'Bearer BQBzZp0-JCqI9fkN9A3rigKoQ3tgNP2-WIF2lrkpmI7N4lCiBRqrlRcR4TFhHZAY3KyyIDpxOAcPbq3dnLk'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
  }
}
