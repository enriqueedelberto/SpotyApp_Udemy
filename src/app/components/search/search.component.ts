import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent{

  artists: any [] = [];
  loading: boolean;
  constructor(private spotify: SpotifyService) {
    
   }

 buscar (termino: string) {
   this.loading = true;
 console.log(termino);
 this.spotify.getArtists (termino)
     .subscribe ( (data: any) => {
      this.loading = false;
      this.artists = data;
      console.log(data);
     });
 }


}
