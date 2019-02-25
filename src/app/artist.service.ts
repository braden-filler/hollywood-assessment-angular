import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArtistService {

  constructor(private http: HttpClient) { }

  getArtists() {
    let artists: Observable<any> = this.http.get('https://fb-assessment.glitch.me/artists');
    return artists;
  }

  getArtist(id: string) {
    console.log('getting artist info')
    let artist: Observable<any> = this.http.get('https://fb-assessment.glitch.me/artists/' + id);
    console.log("artist info", artist)
    return artist;
  }

}
