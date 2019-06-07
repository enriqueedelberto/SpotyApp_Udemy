import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent  {

  artist: any = {};
  topTracks: any[] = []
  loadingArtist: boolean;
  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {

    this.loadingArtist = true;
    this.router.params.subscribe( params => {
        console.log(params['id']);
        this.getArtist( params['id'] );
        this.getTopTracks( params['id'] );
      });
   }

   getArtist (id: string) {
    this.loadingArtist = true;
      this.spotify.getArtist(id)
          .subscribe( artista => {
            console.log( artista );
            this.artist = artista;
            this.loadingArtist = false;
          });
   }

   getTopTracks (id: string) {
     this.spotify.getTopTracks (id)
         .subscribe( topTracks => {
           console.log( topTracks);
           this.topTracks = topTracks;
         });
   }



}
