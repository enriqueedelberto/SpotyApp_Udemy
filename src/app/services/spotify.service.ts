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
      'Authorization': 'Bearer BQCIPunC12yJjNj50CfqRbqormQe_KKHblUmFZm5zF29Xarivu2iG-dqcwxPwU9Sb4r0HubMxEYEyz8LUwZU6t-4avsbj58XstqPLmYKnEuMjp3JN0KbyEYlXRrMnq7JZEHrIuuAPILqEAzgzF_rMjVpeixVESJ2qCgOFKpkHqlFCy4'
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
        .subscribe (data => {
          console.log(data);
        });
  }
}
