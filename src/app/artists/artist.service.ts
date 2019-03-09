import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

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

  private API_KEY = environment.API_KEY;
  private API_URL = environment.API_URL;

  constructor(private http:HttpClient) { }

  
  searchArtist(artist){
    const URL = `${this.API_URL}method=artist.search&artist=${artist}&api_key=${this.API_KEY}&format=json`;
    return this.http.get<Response>(URL)
    .pipe(
      map(response => {
        console.log('response', response);
        return response.results.artistmatches.artist;
      })
    ).toPromise();
  }

  getDetails(artist){
    const URL = `${this.API_URL}method=artist.getInfo&artist=${artist}&api_key=${this.API_KEY}&format=json`;
    return this.http.get(URL).toPromise();
       
  }

}
