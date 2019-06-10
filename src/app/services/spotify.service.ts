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
      'Authorization': 'Bearer BQC9QG6xfuEKDPU1Sbld7MGsP2-dOgGAUD6mSvl9zWv2a662y_xLkNTSZiPTQgOK_v430RdK8KqJqVVLQWI'
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
  }

  getTopTracks (id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?country=ES`)
               .pipe( map( data => data['tracks'] ));
  }


}
