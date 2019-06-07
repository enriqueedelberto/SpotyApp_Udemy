import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  //Importa automatically services
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http: HttpClient) {
    console.log('Spotify service done');
  }

  getQuery (query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      // tslint:disable-next-line:max-line-length
      'Authorization': 'Bearer BQBjbQqHeWudIqvXAa3Xcp5mdE0RwmvWoFQsZYakDCoZ4B4Pd_2uaOQlCQKzDoaRVdN5UbaBLJA2O43iGLo'
    });

    return this.http.get(url, { headers });
  
  }

  getNewReleases () {
    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map ( data => {
      return data['albums'].items;
  }));  
  }


  getArtists (termino: string ) {
    return this.getQuery(`search?q=${ termino }&type=artist&market=US&limit=15`)
               .pipe( map ( data => data['artists'].items));

  }

  getArtist (id: string ) {
    return this.getQuery(`artists/${ id }`);
               //.pipe( map ( data => data['artists'].items));

  }
}
