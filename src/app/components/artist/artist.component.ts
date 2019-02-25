import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  @Input() artist: any;

  constructor() { }

  ngOnInit() {
    
  }

}
