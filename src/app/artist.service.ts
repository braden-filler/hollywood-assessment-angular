import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArtistService {

  constructor(private http: HttpClient) { }

  //calls api to get all artist
  getArtists() {
    let artists: Observable<any> = this.http.get('https://fb-assessment.glitch.me/artists');
    return artists;
  }

  //calls api by passing id to it and returns json
  getArtist(id: string) {
    let artist: Observable<any> = this.http.get('https://fb-assessment.glitch.me/artists/' + id);
    return artist;
  }

}
