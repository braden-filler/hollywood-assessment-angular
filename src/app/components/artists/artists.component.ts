import { Component, OnInit } from '@angular/core';
// import { ARTISTS } from '../../mock-data';
import { ArtistService } from '../../artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  // artists = ARTISTS;
  selectedArtist: any;
  artists: any[];

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.getArtists();
  }

  //calls service to get all artist from api
  getArtists(){
    this.artistService.getArtists().subscribe((artists) => {
      this.artists = artists;
      if(this.artists.length <= 0){
        this.getArtists();
      }
    });
  }

  //calls service to get single artist based on id from api
  onSelect(artist: any): void {
    this.selectedArtist = artist;
    this.artistService.getArtist(artist.artistID).subscribe((artist) => {
      // console.log("artist info in artists", artist)
      this.selectedArtist = artist;
    });
  }

}
