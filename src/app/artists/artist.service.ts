import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

type Response = {
  results: {
    artistmatches : {
      artist:Array<Artist>
    }
  }  
}

type Artist = {
  nombre: string,  
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private API_KEY = 'b2347fbc5fc0cd5aaf5a28721195a2b5';

  constructor(private http:HttpClient) { }

  
  searchArtist(artist){
    const URL = `http://ws.audioscrobbler.com/2.0?method=artist.search&artist=${artist}&api_key=${this.API_KEY}&format=json`;
    return this.http.get<Response>(URL)
    .pipe(
      map(response => {
        console.log('response', response);
        return response.results.artistmatches.artist;
      })
    ).toPromise();
  }

  getDetails(artist){
    const URL = `http://ws.audioscrobbler.com/2.0?method=artist.getInfo&artist=${artist}&api_key=${this.API_KEY}&format=json`;
    return this.http.get(URL).toPromise();
       
  }

}
