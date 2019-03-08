import { Component, OnInit } from '@angular/core';
import { SongService } from './song.service'

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  
  public songs1:Array<object> = null;
  public songs2:Array<object> = null;
  public songs:Array<any> = null;
  public song:string = null;

  constructor(private songService:SongService) { }

  ngOnInit() {
    
    this.songs1 = this.songService.getSongs();
    this.songs2 = [{
      artist:'Nirvana',
      name:'Teens like spirit',
      url:'https://www.last.fm/music/Nirvana/_/Smells+Like++Teen+Spirit'
    }];
  }

  getSongs(){
    this.songService.searchSong(this.song).then(response => {
      this.songs = response;
    });
  }

}
