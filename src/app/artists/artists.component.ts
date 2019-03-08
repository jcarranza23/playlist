import { Component, OnInit } from '@angular/core';
import { ArtistService } from './artist.service';

type Artist = {
  nombre: string,  
  url: string
}

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  public artists:Array<any> = null;
  public artist:string = null;

  constructor(private artistService:ArtistService) { }

  ngOnInit() {
  }

  getArtists(artist){
    this.artistService.searchArtist(this.artist).
      then((response: Array<Artist>) => {
        this.artists = response;
      })
  }
}
