import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

type Track = {
  artist: string,
  name: string,
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class SongService {

  public songs:Array<object> = null;
  private API_KEY = 'b2347fbc5fc0cd5aaf5a28721195a2b5';

  constructor(private http:HttpClient) { }

  getSongs(){
    return this.songs = [{
      artist:'Nirvana SERVICIO',
      name:'Teens like spirit SERVICIO',
      url:'https://www.last.fm/music/Nirvana/_/Smells+Like++Teen+Spirit'
    }];

  }

  searchSong(song){
    const API_URL = `http://ws.audioscrobbler.com/2.0?method=track.search&track=${song}&api_key=${this.API_KEY}&format=json`;
    return this.http.get(API_URL)
    .pipe(
      map(response => response['results'].trackmatches.track)
    ).toPromise();
  }

}
