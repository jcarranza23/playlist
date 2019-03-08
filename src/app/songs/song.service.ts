import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  public songs:Array<object> = null;

  constructor() { }

  getSongs(){
    return this.songs = [{
      artist:'Nirvana SERVICIO',
      name:'Teens like spirit SERVICIO',
      url:'https://www.last.fm/music/Nirvana/_/Smells+Like++Teen+Spirit'
    }];

  }

}
