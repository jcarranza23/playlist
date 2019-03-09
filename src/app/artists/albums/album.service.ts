import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

type Response = {  
    topalbums : {
      album:Album
  }  
}

type Album = {
 
}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private API_KEY = 'b2347fbc5fc0cd5aaf5a28721195a2b5';

  constructor(private http:HttpClient) { }

  getAlbums(artist){
    const URL = `http://ws.audioscrobbler.com/2.0?method=artist.gettopalbums&artist=${artist}&api_key=${this.API_KEY}&format=json`;
    return this.http.get(URL).pipe(
      map((response: Response) => response.topalbums.album)
    )
    .toPromise();
       
  }

}
